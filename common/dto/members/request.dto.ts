import { ContactType } from '../../enums';
import { IGetListDto } from '../../types';

export interface IGetListContactDto extends IGetListDto {
  keyword?: string;
  type?: ContactType;
}
