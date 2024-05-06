export interface ISendMessageDto {
  content: string;
  receiverId: string;
}

export interface IGetMessageListDto {
  senderId: string;
  receiverId: string;
}
