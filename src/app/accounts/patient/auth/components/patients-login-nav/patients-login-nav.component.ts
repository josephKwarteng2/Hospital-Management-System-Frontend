import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patients-login-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './patients-login-nav.component.html',
  styleUrl: './patients-login-nav.component.css',
})
export class PatientsLoginNavComponent {
  public showNavLink = false;

  toggleNavLink() {
    this.showNavLink = !this.showNavLink;
  }
}
