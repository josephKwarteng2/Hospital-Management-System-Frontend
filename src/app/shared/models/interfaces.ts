export type NavLink = {
  routeLink: string;
  icon: string;
  label: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type InputFields = 'patientSignupForm' | 'patientOtp' | 'success';

export type SignUpProgress = 'signupForm' | 'otpForm' | 'success';

export class Signal<T> {
  private _data: T;
  set: (data: T) => void;

  constructor(initialData: T) {
    this._data = initialData;
    this.set = (newData: T) => {
      this._data = newData;
    };
  }

  get data(): T {
    return this._data;
  }
}

export function signal<T>(initialData: T): Signal<T> {
  return new Signal(initialData);
}
