import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  private user: User | null = null;

  setCurrentUser(user: User): void {
    this.user = user;
  }

  getCurrentUser(): User | null {
    return this.user;
  }
}
