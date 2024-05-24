import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RoleService } from 'src/app/shared/services/role.service';

@Component({
  selector: 'app-auth-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './auth-nav.component.html',
  styleUrl: './auth-nav.component.css',
})
export class AuthNavComponent implements OnInit {
  public showNavLink = false;
  public roleService: RoleService = inject(RoleService);

  ngOnInit() {}
  toggleNavLink() {
    this.showNavLink = !this.showNavLink;
  }
}
