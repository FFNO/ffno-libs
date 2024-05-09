export interface ISendMessageDto {
  content: string;
  channelId: string;
}

export interface IGetListMessageDto {
  memberId: string;
  channelId: string;
  channelName?: string;
  channelImgUrl?: string;
}

export interface IGetMessageDto {
  id: string;
  content: string;
  senderId: string;
  channelId: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface IChannelDto {
  id: string;
  name: string;
  imgUrl: string;
  lastMessageId: string;
  updatedAt: Date;
  createdAt: Date;
  lastMessage: IGetMessageDto;
}
