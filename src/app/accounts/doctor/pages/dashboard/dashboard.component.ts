import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthNavComponent } from 'src/app/auth/components/auth-nav/auth-nav.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AuthNavComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
