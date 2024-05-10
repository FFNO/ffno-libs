import { getOptionListFromRecord } from '../../helpers';

export enum PropertyType {
  SINGLE_UNIT = 'SINGLE_UNIT',
  MULTIPLE_UNIT = 'MULTIPLE_UNIT',
}

export const propertyTypeRecord: Record<PropertyType, string> = {
  [PropertyType.SINGLE_UNIT]: 'Single unit',
  [PropertyType.MULTIPLE_UNIT]: 'Multiple unit',
};

export const propertyTypes = getOptionListFromRecord(propertyTypeRecord);
