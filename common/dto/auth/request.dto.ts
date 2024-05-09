import { Gender, MemberRole } from '../../enums';

export interface ISignInDto {
  email: string;
  password: string;
}

export interface ISignUpDto extends ISignInDto {
  role: MemberRole;
  name: string;
  gender: Gender;
  imgUrl: string;
  address: string;
  dateOfBirth: Date;
  identityNumber: string;
}
