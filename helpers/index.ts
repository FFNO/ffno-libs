/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Nullable, NullableObject } from '../common';

export function calculatePage(total?: number) {
  return Math.ceil((total ?? 10) / 10);
}

export const vndFormatter = Intl.NumberFormat('vi-VN', {
  currency: 'VND',
  style: 'currency',
});

export function getOptionListFromRecord(record: Record<number, string>): {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  label: string;
}[] {
  return Object.entries(record).map(([value, label]) => ({
    value,
    label,
  }));
}

export function replaceNullsWithUndefined<T>(
  obj: Nullable<NullableObject<T>>,
): T {
  if (obj === null) {
    // @ts-ignore
    return undefined;
  } else if (typeof obj === 'object') {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        obj[key] = replaceNullsWithUndefined(obj[key]);
      }
    }
  }
  // @ts-ignore
  return obj;
}

export function handleSearchQuery(keyword: string | null | undefined) {
  return !!keyword ? keyword.split(' ').join(' | ') : undefined;
}
