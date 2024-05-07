export interface ISendMessageDto {
  content: string;
  channelId: string;
}

export interface IGetMessageListDto {
  memberId: string;
  channelId: string;
}
