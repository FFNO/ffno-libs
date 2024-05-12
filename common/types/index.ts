export type Nullable<T> = T | null;

export type NullableObject<T> = { [K in keyof T]: T[K] | null };

export type DeepNullable<T> = {
  [K in keyof T]: DeepNullable<T[K]> | null;
};

export interface IGetListDto {
  pageSize?: number;
  page?: number;
  reload?: boolean;
}

export interface IGetListResDto<T = unknown> {
  data: T[];
  total: number;
}
