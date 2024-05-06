import { RequestCategory, RequestStatus } from '../../enums';
import { IMemberResDto } from '../members';
import { IUnitResDto } from '../units';

export interface IRequestResDto {
  id: string;
  name: string;
  details: string;
  status: number;
  category: RequestCategory;
  unit: IUnitResDto;
  sender: IMemberResDto;
  senderId: string;
  receivers: {
    status: RequestStatus;
    updatedAt: Date;
    member: IMemberResDto;
  }[];
  approvers: IMemberResDto[];
  approverIds: string[];
  createdAt: Date;
}
