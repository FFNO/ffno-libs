import { ContractStatus, RequestStatus } from '../../enums';
import { IMemberResDto } from '../members';
import { IUnitResDto } from '../units';

export interface IContractResDto {
  id: number;
  status: ContractStatus;
  template: string;
  startDate: Date;
  endDate: Date;
  price: any;
  deposit: any;
  terminationDate: Date;
  imgUrls: string[];
  landlordId: string;
  landlord: IMemberResDto;
  landlordStatus: RequestStatus;
  tenantId: string;
  tenant: IMemberResDto;
  tenantStatus: RequestStatus;
  unitId: string;
  unit: IUnitResDto;
}
