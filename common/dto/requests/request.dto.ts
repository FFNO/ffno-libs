import { RequestCategory, RequestStatus } from '../../enums';
import { IGetListDto } from '../../types';

export interface IGetListRequestDto extends IGetListDto {
  type?: string;
  status?: RequestStatus;
  category?: RequestCategory;
}

export interface ICreateRequestDto {
  id: string;
  name: string;
  description: string;
  category: RequestCategory;
  receiverIds: string[];
  propertyId?: string;
  unitId?: string;
  contractId?: number;
}

export interface IUpdateRequestDto {
  id: string;
  status: RequestStatus;
}
