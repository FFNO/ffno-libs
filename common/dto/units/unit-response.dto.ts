import { UnitStatus } from '../../enums';
import { Nullable } from '../../types';
import { IEquipmentResDto } from '../equipment';
import { IMemberResDto } from '../members';
import { IPropertyResDto } from '../properties';
import { IReviewRatingResDto, IReviewResDto } from '../reviews';

export interface IUnitResDto {
  id: string;
  name: string;
  isListing: boolean;
  maxSlot: number;
  curSlot: number;
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
  isLiving: boolean;
  selfOccupied: boolean;
  rating: IReviewRatingResDto;
  reviews: IReviewResDto[];
  equipments: IEquipmentResDto[];
}
