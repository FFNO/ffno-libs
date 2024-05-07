export interface ISendMessageDto {
  content: string;
  channelId: string;
}

export interface IGetListMessageDto {
  memberId: string;
  channelId: string;
}

export interface IGetMessageDto {
  id: string;
  memberId: string;
}
