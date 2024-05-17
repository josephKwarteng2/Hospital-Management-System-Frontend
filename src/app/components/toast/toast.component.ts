import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  input,
  output,
} from '@angular/core';
import { ToastConfig } from './toast.service';
import { animationDelay } from './toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent implements OnInit, OnDestroy {
  config = input<ToastConfig>();
  closeEvent = output<void>();
  closed = false;
  opening = true;

  timeoutIds: Array<any> = [];

  ngOnInit() {
    this.timeoutIds.push(
      setTimeout(() => {
        this.opening = false;
      }, animationDelay)
    );
    document.documentElement.style.setProperty(
      '--toastAnimationDelay',
      animationDelay.toString() + 'ms'
    );

    this.autoclose();
  }

  close() {
    this.closed = true;
    this.closeEvent.emit();
  }

  autoclose() {
    this.timeoutIds.push(
      setTimeout(() => {
        this.close();
      }, this.config()?.interval)
    );
  }

  pauseAutoclose() {
    this.timeoutIds.forEach((timeoutId) => {
      clearTimeout(timeoutId);
    });
  }

  ngOnDestroy() {
    this.timeoutIds.forEach((timeoutId) => {
      clearTimeout(timeoutId);
    });
  }
}
