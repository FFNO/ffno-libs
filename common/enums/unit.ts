import { getOptionListFromRecord } from '../../helpers';

export enum UnitStatus {
  GOOD,
  MAINTAINING,
  BAD,
}

export const unitStatusRecord: Record<UnitStatus, string> = {
  [UnitStatus.GOOD]: 'Good',
  [UnitStatus.MAINTAINING]: 'Maintaining',
  [UnitStatus.BAD]: 'Bad',
};

export const unitStatuses = getOptionListFromRecord(unitStatusRecord);
