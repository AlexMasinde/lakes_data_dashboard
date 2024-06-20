export function loginValidators(password: string, email: string) {
  interface LoginErrors {
    email?: string;
    password?: string;
  }
  let errors: LoginErrors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.trim() === "") {
    errors.email = "Email is required";
  } else if (!emailRegex.test(email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  if (password.trim() === "") {
    errors.password = "Password is required";
  } else if (password.trim().length < 6) {
    errors.password = "Password should be at least 6 characters";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
}

export function signUpValidators(
  password: string,
  email: string,
  confirmPassword: string
) {
  interface SignupErrors {
    email?: string;
    password?: string;
    confirmPassword?: string;
  }
  let errors: SignupErrors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.trim() === "") {
    errors.email = "Email is required";
  } else if (!emailRegex.test(email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  if (password.trim() === "") {
    errors.password = "Password is required";
  } else if (password.trim().length < 6) {
    errors.password = "Password should be at least 6 characters";
  }

  if (confirmPassword.trim() === "") {
    errors.confirmPassword = "Confirm password is required";
  } else if (confirmPassword !== password) {
    errors.confirmPassword = "Passwords do not match";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
}
