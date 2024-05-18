import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  doctorRegistration(user: User): Observable<User> {
    return this.http.post<User>(
      `${environment.baseUrl}/auth/doctor/register`,
      user
    );
  }

  doctorLogin(user: User): Observable<User> {
    return this.http.post<User>(`${environment.baseUrl}/auth/login`, user);
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
}
