import { RequestCategory, RequestStatus } from '../../enums';
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
  details: string;
  status: RequestStatus;
  category: RequestCategory;
  unit: IUnitResDto;
  sender: IMemberResDto;
  senderId: string;
  receivers: IMemberWithStatus[];
  approvers: IMemberResDto[];
  approverIds: string[];
  createdAt: Date;
}
