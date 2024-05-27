export enum Role {
  ADMINISTRATOR = 'ADMINISTRATOR',
  DOCTOR = 'DOCTOR',
  PATIENT = 'PATIENT',
}

export type User = {
  message: string;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePicture: string | null;
  role: Role;
};

export interface LoginUserDetails {
  user: {
    email: string;
    password: string;
  };
}

export interface LoginUserResponse {
  message: string;
  user: User;
  token: string;
  role: Role;
}

export interface SignUpUserDetails {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
}

export interface SignUpUserResponse {
  user: User;
  message: string;
}

export type InitialSig = {
  success: { user?: User; message: string } | null;
  error: { message: string } | null;
  pending: boolean;
};

export interface APIResponse {
  message: string;
}
