export interface User {
  message: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface NavLink {
  routeLink: string;
  icon: string;
  label: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export type InitialSig = {
  success: { user?: User; message: string } | null;
  error: { message: string } | null;
  pending: boolean;
};
