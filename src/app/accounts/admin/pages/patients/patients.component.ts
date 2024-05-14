import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchComponent } from '@components/search/search.component';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';
import { SideNavComponent } from '@components/side-nav/side-nav.component';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule, SearchComponent, NavBarComponent, SideNavComponent],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css',
})
export class PatientsComponent {}
