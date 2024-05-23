import { IMemberResDto } from '../members';
import { IPropertyResDto } from '../properties';
import { IUnitResDto } from '../units';

export interface IReviewResDto {
  id: string;
  rating: number;
  comment?: string;
  propertyId?: string;
  property?: IPropertyResDto;
  unitId?: string;
  unit?: IUnitResDto;
  memberId?: string;
  member?: IMemberResDto;
  authorId: string;
  author: IMemberResDto;
  createdAt: Date;
}

export interface IReviewRatingResDto {
  rating: number;
  ratingMap: Record<number, number>;
}
