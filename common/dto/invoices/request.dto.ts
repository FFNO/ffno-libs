import { InvoiceCategory, InvoiceStatus } from '../../enums';
import { IGetListDto } from '../../types';

export interface IGetListInvoiceDto extends IGetListDto {
  categories?: string[];
  propertyId?: string;
  unitId?: string;
  status?: InvoiceStatus;
  memberId?: string;
}

export interface IInvoiceItemDto {
  description: string;
  price: any;
  amount: any;
}

export interface ICreateInvoiceDto {
  dueDate: Date;
  category: InvoiceCategory;
  unitId: string;
  memberId: string;
  items: IInvoiceItemDto[];
  isPaid?: boolean;
}

export interface IUpdateInvoiceDto extends Partial<ICreateInvoiceDto> {}
