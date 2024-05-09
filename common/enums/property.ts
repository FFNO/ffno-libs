export enum PropertyType {
  SINGLE_UNIT,
  MULTIPLE_UNIT,
}

export const propertyTypeRecord: Record<PropertyType, string> = {
  [PropertyType.SINGLE_UNIT]: 'Single unit',
  [PropertyType.MULTIPLE_UNIT]: 'Multiple unit',
};
