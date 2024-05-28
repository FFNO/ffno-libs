import { UnitStatus } from '../../enums';
import { IGetListDto } from '../../types';

export interface IGetListEquipmentDto extends IGetListDto {
  propertyId?: string;
  unitId?: string;
  name?: string;
  category?: string;
  status?: UnitStatus;
}

export interface ICreateEquipmentDto {
  name: string;
  brand?: string;
  price?: any;
  model?: string;
  serial?: string;
  dateOfInstallation?: Date;
  description?: string;
  maintainStatus: UnitStatus;
  // Relations
  category?: string;
  propertyId?: string;
  unitId?: string;
  // Warranty info
  enableWarranty: boolean;
  warrantyExpirationDate?: Date;
}

export interface IUpdateEquipmentDto {
  propertyId?: string;
  unitId?: string;
  maintainStatus?: UnitStatus;
  description?: string;
  name?: string;
}
