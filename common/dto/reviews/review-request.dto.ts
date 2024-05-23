import { IGetListDto } from '../../types';

export interface IGetListReviewDto extends IGetListDto {
  memberId?: string;
  unitId?: string;
  propertyId?: string;
}

export interface ICreateReviewDto {
  rating: number;
  comment?: string;
  memberId?: string;
  unitId?: string;
  propertyId?: string;
}
