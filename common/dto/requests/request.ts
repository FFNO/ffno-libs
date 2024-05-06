import { MemberResDto, UnitResDto } from '@/types';
import { RequestCategory, RequestStatus } from '../../enums';

export interface IRequestResDto {
  id: string;
  name: string;
  details: string;
  status: number;
  category: RequestCategory;
  unit: UnitResDto;
  sender: MemberResDto;
  senderId: MemberResDto;
  receivers: { status: RequestStatus; updatedAt: Date; member: MemberResDto }[];
  approvers: MemberResDto[];
  approverIds: string[];
  createdAt: Date;
}
