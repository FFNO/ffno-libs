import { PropertyType } from '../../enums';
import { Nullable } from '../../types';
import { IMemberResDto } from '../members';
import { IUnitResDto } from '../units';

export interface IPropertyResDto {
  id: string;
  name: string;
  type: PropertyType;
  address: string;
  ward: string;
  district: string;
  province: string;
  imgUrls: string[];
  description: Nullable<string>;
  ownerId: Nullable<string>;
  owner: IMemberResDto;
  amenities: string[];
  units: IUnitResDto[];
  occupiedCount: number;
  vacantCount: number;
}
