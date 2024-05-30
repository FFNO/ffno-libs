import { PropertyType } from '../../enums';
import { Nullable } from '../../types';
import { IEquipmentResDto } from '../equipment';
import { IMemberResDto } from '../members';
import { IReviewRatingResDto, IReviewResDto } from '../reviews';
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
  rating: IReviewRatingResDto;
  reviews: IReviewResDto[];
  equipments: IEquipmentResDto[];
  occupiedCount: number;
  vacantCount: number;
}
