import { CommonModule } from '@angular/common';
import { Component, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InvitationModalComponent } from '@components/modals/invitation-modal/invitation-modal.component';
import { SearchComponent } from '@components/search/search.component';
import { SideNavComponent } from '@components/side-nav/side-nav.component';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';
import { DoctorDetailsComponent } from '../../components/doctor-details/doctor-details.component';
import { ModalService } from '../../../../components/modals/invitation-modal/modal.service';
@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    SideNavComponent,
    DoctorDetailsComponent,
    SearchComponent,
    InvitationModalComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css',
})
export class DoctorsComponent {
  public showFilters = false;

  private modalService: ModalService = inject(ModalService);

  public toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  public openModal() {
    this.modalService.openModal();
  }

  public onChange(event: any) {}
}
