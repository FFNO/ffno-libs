import { ContractStatus } from '../../enums';
import { IGetListDto } from '../../types';

export interface IGetListContractDto extends IGetListDto {
  status?: ContractStatus;
  unitId?: string;
  tenantId?: string;
  landlordId?: string;
}

export interface ICreateContractDto {
  template: string;
  startDate: Date;
  endDate: Date;
  terminationDate?: Date;
  imgUrls: string[];
  landlordId: string;
  tenantId: string;
  unitId: string;
}
