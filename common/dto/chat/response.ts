export interface IMessageResDto {
  id: string;
  content: string;
  senderId: string;
  channelId: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface IGetListMessageResDto {
  channelId: string;
  messages: IMessageResDto[];
}
