import { RequestCategory, RequestStatus } from '../../enums';
import { IContractResDto } from '../contracts';
import { IEquipmentResDto } from '../equipment';
import { IMemberResDto } from '../members';
import { IUnitResDto } from '../units';

export interface IMemberWithStatus {
  status: RequestStatus;
  updatedAt: Date;
  member: IMemberResDto;
}

export interface IRequestResDto {
  id: string;
  name: string;
  description: string;
  status: RequestStatus;
  category: RequestCategory;
  unit: IUnitResDto;
  contract: IContractResDto;
  sender: IMemberResDto;
  senderId: string;
  receivers: IMemberWithStatus[];
  approvers: IMemberResDto[];
  approverIds: string[];
  createdAt: Date;
  equipment: IEquipmentResDto;
}
