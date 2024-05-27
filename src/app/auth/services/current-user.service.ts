import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, of, tap } from 'rxjs';
import { User, LoginUserResponse } from 'src/app/shared/models/auth.types';
import { AccessTokenService } from './accesstoken.service';
import { environment } from 'src/environment/config';

export interface UserData {
  data: User | null;
  isLoggedIn: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {}

  setUser(user: User) {
    this.userSubject.next(user);
  }

  clearUser() {
    this.userSubject.next(null);
  }

  getUser(): User | null {
    return this.userSubject.getValue();
  }
}
