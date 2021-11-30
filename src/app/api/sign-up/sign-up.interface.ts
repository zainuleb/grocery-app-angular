export interface SignUp {
  userName: string;
  email: string;
  password: {
    firstPassword: string;
    confirmPassword: string;
  };
}
