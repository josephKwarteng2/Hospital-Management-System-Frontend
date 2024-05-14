import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '@components/modals/invitation-modal/modal.service';

@Component({
  selector: 'app-invitation-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invitation-modal.component.html',
  styleUrl: './invitation-modal.component.css',
})
export class InvitationModalComponent implements OnInit, OnDestroy {
  public isModalOpen = false;
  subscription!: Subscription;

  private modalService: ModalService = inject(ModalService);

  ngOnInit(): void {
    this.modalSubscription();
  }

  modalSubscription() {
    this.subscription = this.modalService.showModalObservable.subscribe(() => {
      this.isModalOpen = true;
    });
  }

  public openModal() {
    this.isModalOpen = true;
  }

  public closeModal() {
    this.isModalOpen = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
