import { getOptionListFromRecord } from '../../helpers';

export enum RequestCategory {
  UNIT_LEASE = 'UNIT_LEASE',
  REPORT_ISSUE = 'REPORT_ISSUE',
  REQUEST_EQUIPMENT = 'REQUEST_EQUIPMENT',
  EQUIPMENT_WARRANTY = 'EQUIPMENT_WARRANTY',
  TERMINATE_CONTRACT = 'TERMINATE_CONTRACT',
}

export enum RequestStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  HANDLING = 'HANDLING',
  DONE = 'DONE',
}

export const requestCategoryRecord: Record<RequestCategory, string> = {
  [RequestCategory.UNIT_LEASE]: 'Unit Lease',
  [RequestCategory.TERMINATE_CONTRACT]: 'Terminate contract',
  [RequestCategory.REQUEST_EQUIPMENT]: 'Request equipment',
  [RequestCategory.REPORT_ISSUE]: 'Report issue',
  [RequestCategory.EQUIPMENT_WARRANTY]: 'Equipment warranty',
};

export const requestStatusRecord: Record<RequestStatus, string> = {
  [RequestStatus.PENDING]: 'Pending',
  [RequestStatus.ACCEPTED]: 'Approved',
  [RequestStatus.REJECTED]: 'Rejected',
  [RequestStatus.HANDLING]: 'Handling',
  [RequestStatus.DONE]: 'Done',
};

export const requestStatusColorRecord = {
  [RequestStatus.ACCEPTED]: 'green',
  [RequestStatus.PENDING]: 'orange',
  [RequestStatus.REJECTED]: 'red',
  [RequestStatus.HANDLING]: 'orange',
  [RequestStatus.DONE]: 'green',
};

export const requestCategories = getOptionListFromRecord(requestCategoryRecord);

export const requestStatuses = getOptionListFromRecord(requestStatusRecord);
