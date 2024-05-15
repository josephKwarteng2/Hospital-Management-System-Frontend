import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomInputFieldComponent } from '@components/custom-input-field/custom-input-field.component';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';
import { SideNavComponent } from '@components/side-nav/side-nav.component';
@Component({
  selector: 'app-add-faqs',
  standalone: true,
  imports: [
    CommonModule,
    SideNavComponent,
    NavBarComponent,
    CustomInputFieldComponent,
  ],
  templateUrl: './add-faqs.component.html',
  styleUrl: './add-faqs.component.css',
})
export class AddFaqsComponent {}
