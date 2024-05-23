import { Injectable } from '@angular/core';
import { InputFields } from 'src/app/shared/models/interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientSignupProgressService {
  private dataSource = new BehaviorSubject<InputFields>('patientSignupForm');

  data = this.dataSource.asObservable();

  public toggle(data: InputFields) {
    this.dataSource.next(data);
  }
}
