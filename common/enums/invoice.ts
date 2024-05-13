import { getOptionListFromRecord } from '../../helpers';

export enum InvoiceStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  PARTIAL = 'PARTIAL',
  OVERDUE = 'OVERDUE',
}

export enum InvoiceCategory {
  UNIT_CHARGE = 'UNIT_CHARGE',
}

export const invoiceCategoryRecord: Record<InvoiceCategory, string> = {
  [InvoiceCategory.UNIT_CHARGE]: 'Unit charge',
};

export const invoiceStatusRecord: Record<InvoiceStatus, string> = {
  [InvoiceStatus.PENDING]: 'Pending',
  [InvoiceStatus.PAID]: 'Paid',
  [InvoiceStatus.PARTIAL]: 'Partial',
  [InvoiceStatus.OVERDUE]: 'Overdue',
};

export const invoiceCategories = getOptionListFromRecord(invoiceCategoryRecord);

export const invoiceStatuses = getOptionListFromRecord(invoiceStatusRecord);
