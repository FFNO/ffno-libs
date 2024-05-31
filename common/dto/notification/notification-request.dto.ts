export interface NotificationPayload {
  title: string;
  content: string;
  memberId: string;
  link?: string;
}

export interface EmailPayload<T = any> {
  to: string;
  subject: string;
  template: string;
  context: T;
}
