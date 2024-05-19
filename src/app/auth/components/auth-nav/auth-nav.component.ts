import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-auth-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './auth-nav.component.html',
  styleUrl: './auth-nav.component.css',
})
export class AuthNavComponent {
  public showNavLink = false;

  toggleNavLink() {
    this.showNavLink = !this.showNavLink;
  }
}
