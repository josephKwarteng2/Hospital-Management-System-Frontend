import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';
import { SideNavComponent } from '@components/side-nav/side-nav.component';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule, SideNavComponent, NavBarComponent],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css',
})
export class PaymentsComponent {}
