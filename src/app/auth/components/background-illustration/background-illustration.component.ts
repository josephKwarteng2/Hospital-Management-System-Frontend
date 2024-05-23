import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-background-illustration',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './background-illustration.component.html',
  styleUrl: './background-illustration.component.css',
})
export class BackgroundIllustrationComponent {}
