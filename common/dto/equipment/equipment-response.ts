import { UnitStatus } from '../../enums';
import { IPropertyResDto } from '../properties';
import { IUnitResDto } from '../units';

export interface IEquipmentResDto {
  id: string;
  name: string;
  brand: string;
  price: any;
  model: string;
  serial: string;
  dateOfInstallation: Date;
  description: string;
  maintainStatus: UnitStatus;
  enableWarranty: boolean;
  warrantyExpirationDate: Date;
  property: IPropertyResDto;
  unit: IUnitResDto;
  imgUrls: string[];
  category: string;
}
