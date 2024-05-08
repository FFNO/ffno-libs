export enum MemberRole {
  ADMIN,
  LANDLORD,
  TENANT,
  SERVICE_WORKER,
}

export enum ContactType {
  TENANT,
  SERVICE_WORKER,
}

export enum Gender {
  MALE,
  FEMALE,
}

export const memberRoleRecord: Record<MemberRole, string> = {
  [MemberRole.ADMIN]: 'Admin',
  [MemberRole.LANDLORD]: 'Landlord',
  [MemberRole.TENANT]: 'Tenant',
  [MemberRole.SERVICE_WORKER]: 'Service worker',
};
