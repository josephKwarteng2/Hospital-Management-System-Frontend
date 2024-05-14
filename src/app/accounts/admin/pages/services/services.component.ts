import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';
import { SideNavComponent } from '@components/side-nav/side-nav.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SideNavComponent, NavBarComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {}
