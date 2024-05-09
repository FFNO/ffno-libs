export enum InvoiceStatus {
  PENDING,
  PAID,
  PARTIAL,
  OVERDUE,
}

export enum InvoiceCategory {
  UNIT_CHARGE,
}

export const invoiceCategoryRecord: Record<InvoiceCategory, string> = {
  [InvoiceCategory.UNIT_CHARGE]: 'Unit charge',
};
