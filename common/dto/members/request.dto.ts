import { MemberRole } from '../../enums';

export interface IMemberResDto {
  id: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  address: string;
  dateOfBirth: Date;
  imgUrl: string;
  role: MemberRole;
  unit: string;
}
