interface SendMailData {
  subject: string;
  body: string;
}

interface MailAdapter {
  sendMail: (data: SendMailData) => Promise<void>;
}

export type { SendMailData, MailAdapter };
