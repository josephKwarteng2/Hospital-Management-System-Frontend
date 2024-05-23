export type User = {
  message: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePicture?: string;
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
