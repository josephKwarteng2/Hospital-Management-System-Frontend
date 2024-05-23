import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/shared/models/interfaces';

@Component({
  selector: 'app-auth-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './auth-nav.component.html',
  styleUrl: './auth-nav.component.css',
})
export class AuthNavComponent implements OnInit {
  // isLoggedIn$!: Observable<boolean>;
  public showNavLink = false;
  isLoggedIn$: Observable<boolean>;
  user$: Observable<User | null>;

  constructor(private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.user$ = this.authService.user$;
  }

  ngOnInit(): void {}

  toggleNavLink() {
    this.showNavLink = !this.showNavLink;
  }

  logout() {
    this.authService.logout();
  }
}
