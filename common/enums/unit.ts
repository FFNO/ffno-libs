import { getOptionListFromRecord } from '../../helpers';

export enum UnitStatus {
  GOOD = 'GOOD',
  MAINTAINING = 'MAINTAINING',
  BAD = 'BAD',
}
export enum UnitPriceCategory {
  WATER = 'WATER',
  ELECTRICITY = 'ELECTRICITY',
}

export const unitStatusRecord: Record<UnitStatus, string> = {
  [UnitStatus.GOOD]: 'Good',
  [UnitStatus.MAINTAINING]: 'Maintaining',
  [UnitStatus.BAD]: 'Have issue',
};

export const unitStatusColorRecord = {
  [UnitStatus.GOOD]: 'green',
  [UnitStatus.MAINTAINING]: 'orange',
  [UnitStatus.BAD]: 'red',
};

export const unitStatuses = getOptionListFromRecord(unitStatusRecord);
