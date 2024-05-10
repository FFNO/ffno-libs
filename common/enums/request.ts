import { getOptionListFromRecord } from '../../helpers';

export enum RequestCategory {
  UNIT_LEASE,
}

export enum RequestStatus {
  PENDING,
  ACCEPTED,
  REJECTED,
}

export const requestCategoryRecord: Record<RequestCategory, string> = {
  [RequestCategory.UNIT_LEASE]: 'Unit Lease',
};

export const requestStatusRecord: Record<RequestStatus, string> = {
  [RequestStatus.PENDING]: 'Pending',
  [RequestStatus.ACCEPTED]: 'Approved',
  [RequestStatus.REJECTED]: 'Rejected',
};

export const requestCategories = getOptionListFromRecord(requestCategoryRecord);
