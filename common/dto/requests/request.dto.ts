import { RequestCategory, RequestStatus } from '../../enums';
import { IGetListDto } from '../../types';

export interface IGetListRequestDto extends IGetListDto {
  type?: string;
}

export interface ICreateRequestDto {
  id: string;
  name: string;
  details: string;
  category: RequestCategory;
  receiverIds: string[];
  propertyId: string;
  unitId: string;
}

export class IUpdateRequestDto {
  id: string;
  status: RequestStatus;
}
