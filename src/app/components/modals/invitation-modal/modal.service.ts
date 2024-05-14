import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private showModalSubject = new Subject<void>();
  public showModalObservable = this.showModalSubject.asObservable();

  openModal() {
    this.showModalSubject.next();
  }

  closeModal() {
    this.showModalSubject.next();
  }
}
