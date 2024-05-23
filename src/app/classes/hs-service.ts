import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { throwError } from 'rxjs';

export class HSService {
  protected http = inject(HttpClient);

  constructor() {}

  protected get headers() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  protected onError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(error.error);
      return throwError(() => ({
        Network: ['Error. Check connectivity and try again'],
      }));
    } else if (error.status === 500) {
      return throwError(() => ({
        Server: ['Cannot be reached. Please try later'],
      }));
    } else {
      console.error(error.error);
      return throwError(() => error.error.errors);
    }
  }
}
