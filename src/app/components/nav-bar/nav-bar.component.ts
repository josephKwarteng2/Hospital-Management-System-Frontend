import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/interfaces';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {}
