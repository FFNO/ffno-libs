import { PropertyType } from '../../enums';
import { IGetListDto } from '../../types';

export interface IGetListPropertyDto extends IGetListDto {
  name?: string;
  type?: PropertyType;
  ward?: string;
  district?: string;
  province?: string;
  amenities?: string[];
}

export interface ICreateSimpleUnitDto {
  name: string;
  area: number;
  price: number;
  deposit: number;
}

export interface ICreatePropertyDto {
  id: string;
  name: string;
  type: PropertyType;
  address: string;
  ward: string;
  district: string;
  province: string;
  imgUrls: string[];
  amenities: string[];
  equipments: string[];
  ownerId: string;
  units: ICreateSimpleUnitDto[];
}

export interface IUpdatePropertyDto extends Partial<ICreatePropertyDto> {}
