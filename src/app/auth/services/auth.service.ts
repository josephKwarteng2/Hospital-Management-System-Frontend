import { Injectable, inject } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import {
  LoginUserDetails,
  LoginUserResponse,
  SignUpUserDetails,
  SignUpUserResponse,
} from 'src/app/shared/models/auth.types';
import { RoleService } from 'src/app/shared/services/role.service';
import { environment } from 'src/environment/config';
import { User } from 'src/app/shared/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'skip-browser-warning',
  });

  private http: HttpClient = inject(HttpClient);
  private roleService: RoleService = inject(RoleService);
  private loggedIn = false;

  doctorRegistration(user: SignUpUserDetails) {
    return this.http.post<SignUpUserResponse>(
      `${environment.baseUrl}/auth/doctor/register`,
      user
    );
  }

  doctorLogin(user: LoginUserDetails) {
    return this.http
      .post<LoginUserResponse>(`${environment.baseUrl}/auth/login`, user)
      .pipe(
        tap((response: LoginUserResponse) => {
          if (response && response.user) {
            this.roleService.setCurrentUserRole(response.user);
          } else {
            console.warn('Response does not contain user data:', response);
          }
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(
      () => new Error(error.message || 'Unknown error occurred')
    );
  }

  patientSignup(user: SignUpUserDetails) {
    return this.http.post<SignUpUserResponse>(
      `${environment.baseUrl}/auth/patient/register
    `,
      user
    );
  }

  patientLogin(user: LoginUserDetails) {
    return this.http
      .post<LoginUserResponse>(`${environment.baseUrl}/auth/login`, user)
      .pipe(
        tap((response: LoginUserResponse) => {
          if (response && response.user) {
            this.roleService.setCurrentUserRole(response.user);
          } else {
            console.warn('Response does not contain user data:', response);
          }
        }),
        catchError(this.handlePatientLoginError)
      );
  }

  private handlePatientLoginError(error: HttpErrorResponse): Observable<never> {
    return throwError(
      () => new Error(error.message || 'Unknown error occurred')
    );
  }

  veriftyOtp(otp: string): Observable<User> {
    return this.http.post<User>(
      `${environment.baseUrl}/auth/verify?code=${otp}`,
      { otp }
    );
  }

  resendOtp(email: string): Observable<User> {
    return this.http.post<User>(`${environment.baseUrl}/auth/resend-code`, {
      email,
    });
  }

  sendEmail(email: string): Observable<User> {
    return this.http.post<User>(`${environment.baseUrl}/auth/reset-password`, {
      email,
    });
  }

  resetPassword(
    otp: string,
    userId: string,
    email: string,
    password: string
    // confirmPassword: string
  ): Observable<User> {
    const body = {
      userId,
      email,
      password,
      // confirmPassword,
    };

    return this.http.post<User>(
      `${environment.baseUrl}/auth/reset-password/${otp}${userId}`,
      { body },
      { headers: this.headers }
    );
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
