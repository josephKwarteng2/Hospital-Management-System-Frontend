import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';
import { SideNavComponent } from '@components/side-nav/side-nav.component';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, SideNavComponent, NavBarComponent],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css',
})
export class AnalyticsComponent {}
