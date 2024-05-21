import { MemberRole } from '../../enums';
import { IContractResDto } from '../contracts';

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
  tenantContracts: IContractResDto[];
}

export interface ICurrentMemberResDto {
  identityNumber: string;
  identityImgUrls: string;
}
