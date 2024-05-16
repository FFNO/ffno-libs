import { UnitStatus } from '../../enums';
import { Nullable } from '../../types';
import { IMemberResDto } from '../members';
import { IPropertyResDto } from '../properties';

export interface IUnitResDto {
  id: string;

  name: string;

  isListing: boolean;

  area: any;

  price: any;

  deposit: any;

  description: Nullable<string>;

  status: UnitStatus;

  imgUrls: string[];

  unitFeatures: string[];

  tenants: IMemberResDto[];

  payer: IMemberResDto;

  property: IPropertyResDto;

  propertyId: string;

  requested: boolean;
}
