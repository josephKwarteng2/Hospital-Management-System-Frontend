import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';
import { SideNavComponent } from '@components/side-nav/side-nav.component';

@Component({
  selector: 'app-medical-form',
  standalone: true,
  imports: [CommonModule, SideNavComponent, NavBarComponent],
  templateUrl: './medical-form.component.html',
  styleUrl: './medical-form.component.css',
})
export class MedicalFormComponent {}
