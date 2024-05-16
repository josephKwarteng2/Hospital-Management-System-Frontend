export type User = {
  message: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type NavLink = {
  routeLink: string;
  icon: string;
  label: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type InputFields = 'email' | 'otp' | 'changePassword';

export type SignUpProgress = 'signupForm' | 'otpForm' | 'success';

export type InitialSig = {
  success: { user?: User; message: string } | null;
  error: { message: string } | null;
  pending: boolean;
};
