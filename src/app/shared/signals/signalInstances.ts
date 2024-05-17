import { InitialSig } from '../models/interfaces';
import { signal } from '@angular/core';

export const pendingSignal = signal<InitialSig>({
  success: null,
  error: null,
  pending: true,
});

export const successSignal = (message: string) => ({
  success: { message },
  error: null,
  pending: false,
});

export const errorSignal = (message: string) => ({
  success: null,
  error: { message },
  pending: false,
});
