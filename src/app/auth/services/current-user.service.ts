import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/models/auth.types';

export interface UserData {
  data: User | null;
  isLoggedIn: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  private currentUserSubject = new BehaviorSubject<UserData>({
    data: null,
    isLoggedIn: false,
  });

  public currentUser = this.currentUserSubject.asObservable();

  public get userValue(): UserData {
    return this.currentUserSubject.value;
  }

  public setUser(user: User): void {
    this.currentUserSubject.next({
      data: user,
      isLoggedIn: true,
    });
  }
}
