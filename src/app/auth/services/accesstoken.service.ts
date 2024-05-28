import { Injectable } from '@angular/core';
import { ACCESS_TOKEN_KEY } from 'src/app/shared/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class AccessTokenService {
  get(key: string = ACCESS_TOKEN_KEY): unknown {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      return null;
    }
  }

  set(data: unknown, key: string = ACCESS_TOKEN_KEY) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      error;
    }
  }

  clear(key: string = ACCESS_TOKEN_KEY) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      error;
    }
  }
}
