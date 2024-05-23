import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, of, tap } from 'rxjs';
import { User, LoginUserResponse } from 'src/app/shared/models/auth.types';
import { TokenService } from './token.service';
import { HSService } from 'src/app/classes/hs-service';
import { environment } from 'src/environment/config';

export interface UserData {
  data: User | null;
  isLoggedIn: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService extends HSService {
  tokenService = inject(TokenService);
  private userDataSource = new BehaviorSubject<UserData>({
    data: null,
    isLoggedIn: false,
  });

  user = this.userDataSource.asObservable();

  constructor() {
    super();
  }

  fetchCurrentUser() {
    const token = this.tokenService.get();
    if (token) {
      return this.http
        .get<LoginUserResponse>(`${environment.baseUrl}/user`)
        .pipe(
          tap((res) => {
            this.userDataSource.next({
              data: res.user,
              isLoggedIn: true,
            });
          }),
          catchError(() => {
            this.userDataSource.next({
              data: null,
              isLoggedIn: false,
            });
            return of(null);
          })
        );
    } else {
      this.userDataSource.next({
        data: null,
        isLoggedIn: false,
      });
      return of(null);
    }
  }

  setCurrentUser(user: User) {
    this.userDataSource.next({
      data: user,
      isLoggedIn: true,
    });
  }

  clearCurrentUser() {
    this.userDataSource.next({
      data: null,
      isLoggedIn: false,
    });
  }
}
