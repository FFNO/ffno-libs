import { UnitStatus } from '../../enums';
import { IGetListDto } from '../../types';

export interface IGetListUnitDto extends IGetListDto {
  name?: string;
  ward?: string;
  district?: string;
  province?: string;
  amenities?: string[];
  features?: string[];
  minArea?: any;
  maxArea?: any;
  minPrice?: any;
  maxPrice?: any;
}

export interface IGetSimpleListUnitDto {
  propertyId?: string;
}

export interface ICreateUnitDto {
  id: string;
  name: string;
  area: any;
  price: any;
  deposit: any;
  status: UnitStatus;
  imgUrls: string[];
  description: string;
  unitFeatures: string[];
  propertyId: string;
}

export interface IUpdateUnitDto extends Partial<ICreateUnitDto> {}

export interface IOpenUnitDto {
  unitIds: string[];
}
