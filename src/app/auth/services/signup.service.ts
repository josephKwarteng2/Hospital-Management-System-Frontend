import { Injectable } from '@angular/core';
import { SignUpProgress } from 'src/app/shared/models/interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private dataSource = new BehaviorSubject<SignUpProgress>('signupForm');

  data = this.dataSource.asObservable();

  public toggle(data: SignUpProgress) {
    this.dataSource.next(data);
  }

  public completeSignup() {
    this.dataSource.next('success');
  }
}
