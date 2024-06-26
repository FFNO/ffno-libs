import { InvoiceCategory, InvoiceStatus } from '../../enums';
import { Nullable } from '../../types';
import { IMemberResDto } from '../members';
import { IUnitResDto } from '../units';

export interface IInvoiceItemResDto {
  id: string;
  price: any;
  amount: any;
  description: string;
  total: any;
}

export interface IInvoiceResDto {
  id: string;
  status: InvoiceStatus;
  total: any;
  paidAt: Nullable<Date>;
  dueDate: Date;
  description: string;
  category: InvoiceCategory;
  unitId: string;
  unit: IUnitResDto;
  memberId: string;
  member: IMemberResDto;
  items: IInvoiceItemResDto[];
}
