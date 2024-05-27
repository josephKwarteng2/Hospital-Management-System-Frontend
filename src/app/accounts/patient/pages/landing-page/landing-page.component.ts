import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { AuthNavComponent } from '../../../../auth/components/auth-nav/auth-nav.component';
import { ServicesCardComponent } from '../../components/services-card/services-card.component';
import { TrusteesCardComponent } from '../../components/trustees-card/trustees-card.component';
import { CustomInputFieldComponent } from '@components/custom-input-field/custom-input-field.component';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    AuthNavComponent,
    ServicesCardComponent,
    TrusteesCardComponent,
    CustomInputFieldComponent,
    FooterComponent,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  @ViewChild('animatedText', { static: false })
  animatedText?: ElementRef<HTMLSpanElement>;

  texts: string[] = ['Specialist', 'Dentist', 'OB-GYNs', 'Dermatologist'];
  currentText?: string;
  intervalId: any;

  emailForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  ngOnInit() {
    this.updateText();
    this.intervalId = setInterval(() => this.updateText(), 4000);
  }

  updateText() {
    this.currentText =
      this.texts[Math.floor(Math.random() * this.texts.length)];
    document.documentElement.style.setProperty(
      '--typewriterCharacters',
      this.currentText.length.toString()
    );

    const span = this.animatedText?.nativeElement;
    if (span) {
      span.classList.remove('typewriter');
      void span.offsetWidth;
      span.classList.add('typewriter');
    }
  }

  bookAppointment() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/patient/home']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
