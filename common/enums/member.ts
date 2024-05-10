import { getOptionListFromRecord } from '../../helpers';

export enum MemberRole {
  ADMIN = 'ADMIN',
  LANDLORD = 'LANDLORD',
  TENANT = 'TENANT',
  SERVICE_WORKER = 'SERVICE_WORKER',
}

export enum ContactType {
  TENANT = 'TENANT',
  SERVICE_WORKER = 'SERVICE_WORKER',
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export const memberRoleRecord: Record<MemberRole, string> = {
  [MemberRole.ADMIN]: 'Admin',
  [MemberRole.LANDLORD]: 'Landlord',
  [MemberRole.TENANT]: 'Tenant',
  [MemberRole.SERVICE_WORKER]: 'Service worker',
};

export const genderRecord: Record<Gender, string> = {
  [Gender.MALE]: 'Male',
  [Gender.FEMALE]: 'Female',
};

export const genders = getOptionListFromRecord(genderRecord);

export const memberRoles = getOptionListFromRecord(memberRoleRecord);
