export type Role = 'patient' | 'doctor' | 'admin';

export type User = {
  message: string;
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
  user: User;
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
}

export interface APIResponse {
  message: string;
}
