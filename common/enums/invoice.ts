import { getOptionListFromRecord } from '../../helpers';

export enum InvoiceStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  PARTIAL = 'PARTIAL',
  OVERDUE = 'OVERDUE',
  MERGED = 'MERGED',
}

export enum InvoiceCategory {
  MERGED = 'MERGED',
  UNIT_CHARGE = 'UNIT_CHARGE',
  UNIT_PRICE_LOG = 'UNIT_PRICE_LOG',
}

export const invoiceCategoryRecord: Record<InvoiceCategory, string> = {
  [InvoiceCategory.MERGED]: 'Merge',
  [InvoiceCategory.UNIT_CHARGE]: 'Unit charge',
  [InvoiceCategory.UNIT_PRICE_LOG]: 'Unit log price',
};

export const invoiceStatusRecord: Record<InvoiceStatus, string> = {
  [InvoiceStatus.PENDING]: 'Pending',
  [InvoiceStatus.PAID]: 'Paid',
  [InvoiceStatus.PARTIAL]: 'Partial',
  [InvoiceStatus.OVERDUE]: 'Overdue',
  [InvoiceStatus.MERGED]: 'Merged',
};

export const invoiceStatusColorRecord: Record<InvoiceStatus, string> = {
  [InvoiceStatus.PENDING]: 'gray',
  [InvoiceStatus.PAID]: 'green',
  [InvoiceStatus.PARTIAL]: 'orange',
  [InvoiceStatus.OVERDUE]: 'red',
  [InvoiceStatus.MERGED]: 'grape',
};

export const invoiceCategories = getOptionListFromRecord(invoiceCategoryRecord);

export const invoiceStatuses = getOptionListFromRecord(invoiceStatusRecord);
