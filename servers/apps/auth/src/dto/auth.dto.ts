import { IsEmail, Matches, IsString, IsNotEmpty } from 'class-validator';

export class AuthLoginUserDto {
  @IsNotEmpty({ message: 'email is required' })
  @IsEmail({}, { message: 'invalid email' })
  email: string;

  /* Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character */

  @IsNotEmpty({ message: 'password is required' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z\d@$&+,:;=?@#|'<>.^*()%!-]{8,}$/,
    { message: 'invalid password' },
  )
  password: string;
}

export class AuthRegisterUserDto {
  @IsNotEmpty({ message: 'name is required' })
  @IsString({ message: 'name must be a string' })
  name: string;

  @IsNotEmpty({ message: 'email is required' })
  @IsEmail({}, { message: 'invalid email' })
  email: string;

  /* Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character */
  @IsNotEmpty({ message: 'password is required' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z\d@$&+,:;=?@#|'<>.^*()%!-]{8,}$/,
    { message: 'invalid password' },
  )
  password: string;
}

export class AuthChangePasswordUserDto {
  @IsNotEmpty({ message: 'email is required' })
  @IsEmail({}, { message: 'invalid email' })
  email: string;

  /* Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character */

  @IsNotEmpty({ message: 'current password is required' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z\d@$&+,:;=?@#|'<>.^*()%!-]{8,}$/,
    { message: 'invalid password' },
  )
  currentPassword: string;

  @IsNotEmpty({ message: 'new password is required' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z\d@$&+,:;=?@#|'<>.^*()%!-]{8,}$/,
    { message: 'invalid password' },
  )
  newPassword: string;
}

export class AuthForgotPasswordUserDto {
  @IsNotEmpty({ message: 'email is required' })
  @IsEmail({}, { message: 'invalid email' })
  email: string;
}

export class AuthConfirmPasswordUserDto {
  @IsNotEmpty({ message: 'email is required' })
  @IsEmail({}, { message: 'invalid email' })
  email: string;

  @IsString({ message: 'confirmation code must be a string' })
  @IsNotEmpty({ message: 'confirmation code is required' })
  confirmationCode: string;

  @IsNotEmpty({ message: 'new password is required' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z\d@$&+,:;=?@#|'<>.^*()%!-]{8,}$/,
    { message: 'invalid password' },
  )
  newPassword: string;
}
