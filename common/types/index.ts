export type Nullable<T> = T | null;

export interface IGetListDto {
  pageSize?: number;
  page?: number;
}

export interface IGetListResDto<T = unknown> {
  data: T[];
  total: number;
}
