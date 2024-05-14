import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRegistration } from '../models/interfaces';
// import { environment } from '../../../environment/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'skip-browser-warning',
  });
  private http: HttpClient = inject(HttpClient);

  // doctorRegistration(): Observable<UserRegistration> {
  //   return this.http.post<UserRegistration>(
  //     `${environment.baseUrl}/doctor/register`,
  //     { headers: this.headers }
  //   );
  // }
}
