import { CommonModule } from '@angular/common';
import { Component, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';
import { SearchComponent } from '@components/search/search.component';
import { SideNavComponent } from '@components/side-nav/side-nav.component';
import { FAQ } from 'src/app/shared/models/interfaces';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [
    CommonModule,
    SideNavComponent,
    NavBarComponent,
    SearchComponent,
    RouterLink,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css',
})
export class FaqsComponent {
  router: Router = inject(Router);

  faqsData = [
    {
      question: 'Can I view my past appointments and medical history?',
      answer:
        'Yes, you can view your past appointments and access you medical history through your account dashboard. This allows you to keep track of your healthcare appointments and access important medical information whenever you need it.',
    },
    {
      question: 'How do I book an appointment through the platform?',
      answer:
        'To book an appointment, simply log in to your account, choose the hospital or healthcare provider you wish to visit, select your preferred date and time slot, and confirm your appointment. You will receive a confirmation email once your appointment is successfully booked.',
    },
    {
      question:
        'Are my personal and medical information secure on the platform?',
      answer:
        'Yes we take the security and privacy of your information seriously. Our platform uses advanced encryption and security measures to protect your personal and medical data. We comply with all relevant data protection regulations to ensure your information remains safe and confidentia.',
    },
    {
      question: 'Can I book appointments for family members or dependents?',
      answer:
        'Yes, you can book appointments for family members or dependents through your account. Simply add their information to your profile, and you will be able to schedule appointments on their behalf.',
    },
  ];

  openAddFaqPage() {
    this.router.navigate(['/admin/add-faqs']);
  }

  public onChange(event: any) {
    console.log(event);
  }
}
