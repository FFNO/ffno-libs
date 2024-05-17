import { getOptionListFromRecord } from '../../helpers';

export enum ContractStatus {
  ACTIVE = 'ACTIVE',
  PENDING = 'PENDING',
  EXPIRED = 'EXPIRED',
  REJECTED = 'REJECTED',
}

export const contractStatusRecord: Record<ContractStatus, string> = {
  [ContractStatus.ACTIVE]: 'Active',
  [ContractStatus.PENDING]: 'Pending',
  [ContractStatus.EXPIRED]: 'Expired',
  [ContractStatus.REJECTED]: 'Rejected',
};

export const contractStatusColorRecord: Record<ContractStatus, string> = {
  [ContractStatus.ACTIVE]: 'green',
  [ContractStatus.PENDING]: 'orange',
  [ContractStatus.EXPIRED]: 'red',
  [ContractStatus.REJECTED]: 'red',
};

export const contractStatuses = getOptionListFromRecord(ContractStatus);
