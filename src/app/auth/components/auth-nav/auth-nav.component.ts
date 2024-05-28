import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  CurrentUserService,
  UserData,
} from '../../services/current-user.service';

@Component({
  selector: 'app-auth-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './auth-nav.component.html',
  styleUrls: ['./auth-nav.component.css'],
})
export class AuthNavComponent implements OnInit {
  public showNavLink = false;
  public currentUser: UserData | null = null;
  private currentUserService: CurrentUserService = inject(CurrentUserService);

  ngOnInit() {
    this.currentUserService.currentUser.subscribe((userData: UserData) => {
      this.currentUser = userData;
    });
  }

  toggleNavLink() {
    this.showNavLink = !this.showNavLink;
  }
}
