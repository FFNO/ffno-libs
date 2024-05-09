import { MemberRole } from '../../enums';

export interface ISignInResDto {
  id: string;
  name: string;
  email: string;
  role: MemberRole;
  imgUrl: string;
}
