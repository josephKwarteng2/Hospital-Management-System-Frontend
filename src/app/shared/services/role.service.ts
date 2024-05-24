// RoleService
import { Injectable } from '@angular/core';
import { User } from '../models/auth.types';

enum UserRole {
  Patient = 'patient',
  Doctor = 'doctor',
  Admin = 'admin',
}

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private currentUserRole: UserRole | '' = '';

  constructor() {}

  setCurrentUserRole(user: User) {
    if (
      user &&
      user.role &&
      Object.values(UserRole).includes(user.role as UserRole)
    ) {
      this.currentUserRole = user.role as UserRole;
    } else {
      console.warn(
        `Unknown or invalid user role: ${user ? user.role : 'undefined'}`
      );
      this.currentUserRole = '';
    }
  }

  getCurrentUserRole(): UserRole | '' {
    return this.currentUserRole;
  }

  hasRole(role: UserRole): boolean {
    return this.currentUserRole === role;
  }

  isPatient(): boolean {
    return this.hasRole(UserRole.Patient);
  }

  isDoctor(): boolean {
    return this.hasRole(UserRole.Doctor);
  }

  isAdmin(): boolean {
    return this.hasRole(UserRole.Admin);
  }
}
