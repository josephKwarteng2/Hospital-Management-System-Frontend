import { FormGroup } from '@angular/forms';

export const MESSAGE_CLEAR_DELAY_MS = 4000;

export function getControlErrors(
  controlName: string,
  errorMessages: { [key: string]: string },
  formGroup: FormGroup
): string {
  const control = formGroup.get(controlName);
  if (control?.invalid && (control.dirty || control.touched)) {
    for (const errorKey in errorMessages) {
      if (control.hasError(errorKey)) {
        return errorMessages[errorKey];
      }
    }
  }
  return '';
}

export const ACCESS_TOKEN_KEY = 'accessToken';
