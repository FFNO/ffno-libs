import { Nullable } from '../../types';
import { IMemberResDto } from '../members';
import { IUnitResDto } from '../units';

export interface IPropertyResDto {
  id: string;
  name: string;
  type: number;
  address: string;
  ward: string;
  district: string;
  province: string;
  imgUrls: string[];
  details: Nullable<string>;
  ownerId: Nullable<string>;
  owner: IMemberResDto;
  amenities: string[];
  units: IUnitResDto[];
  occupiedCount: number;
  vacantCount: number;
}
