import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';
import { SideNavComponent } from '@components/side-nav/side-nav.component';

@Component({
  selector: 'app-configurations',
  standalone: true,
  imports: [CommonModule, SideNavComponent, NavBarComponent],
  templateUrl: './configurations.component.html',
  styleUrl: './configurations.component.css',
})
export class ConfigurationsComponent {}
