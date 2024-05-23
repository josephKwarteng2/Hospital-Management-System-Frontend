import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
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

  private isLoggedInSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  private userSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);

  private http: HttpClient = inject(HttpClient);
  private loggedIn = false;

  constructor() {
    this.checkLoginStatus();
  }

  get isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  get user$(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  private checkLoginStatus() {
    const loggedIn = false;
    const user: User | null = null;
    this.isLoggedInSubject.next(loggedIn);
    this.userSubject.next(user);
  }

  login(user: User) {
    this.isLoggedInSubject.next(true);
    this.userSubject.next(user);
  }

  logout() {
    this.isLoggedInSubject.next(false);
    this.userSubject.next(null);
  }

  doctorRegistration(user: User): Observable<User> {
    return this.http.post<User>(
      `${environment.baseUrl}/auth/doctor/register`,
      user
    );
  }

  doctorLogin(user: User): Observable<User> {
    return this.http.post<User>(`${environment.baseUrl}/auth/login`, user);
  }

  patientSignup(user: User): Observable<User> {
    return this.http.post<User>(
      `${environment.baseUrl}/auth/patient/register
    `,
      user
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
