import { getOptionListFromRecord } from '../../helpers';

export enum RequestCategory {
  UNIT_LEASE = 'UNIT_LEASE',
  TERMINATE_CONTRACT = 'TERMINATE_CONTRACT',
  REPORT_ISSUE = 'REPORT_ISSUE',
  EQUIPMENT_WARRANTY = 'EQUIPMENT_WARRANTY',
}

export enum RequestStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

export const requestCategoryRecord: Record<RequestCategory, string> = {
  [RequestCategory.UNIT_LEASE]: 'Unit Lease',
  [RequestCategory.TERMINATE_CONTRACT]: 'Terminate contract',
  [RequestCategory.REPORT_ISSUE]: 'Report issue',
  [RequestCategory.EQUIPMENT_WARRANTY]: 'Equipment warranty',
};

export const requestStatusRecord: Record<RequestStatus, string> = {
  [RequestStatus.PENDING]: 'Pending',
  [RequestStatus.ACCEPTED]: 'Approved',
  [RequestStatus.REJECTED]: 'Rejected',
};

export const requestStatusColorRecord = {
  [RequestStatus.ACCEPTED]: 'green',
  [RequestStatus.PENDING]: 'orange',
  [RequestStatus.REJECTED]: 'red',
};

export const requestCategories = getOptionListFromRecord(requestCategoryRecord);

export const requestStatuses = getOptionListFromRecord(requestStatusRecord);
