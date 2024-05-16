import { ContractStatus } from '../../enums';
import { IMemberResDto } from '../members';
import { IUnitResDto } from '../units';

export interface IContractResDto {
  id: number;
  status: ContractStatus;
  template: string;
  startDate: Date;
  endDate: Date;
  terminationDate: Date;
  imgUrls: string[];
  landlordId: string;
  landlord: IMemberResDto;
  tenantId: string;
  tenant: IMemberResDto;
  unitId: string;
  unit: IUnitResDto;
}
