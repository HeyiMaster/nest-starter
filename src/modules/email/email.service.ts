import { Injectable } from '@nestjs/common';
import { MailerService } from '@nest-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  sendEmail() {
    this.mailerService.sendMail({
      to: 'flana_zhong@163.com',
      from: '1255968521@qq.com',
      // subject: 'Testing Nest MailerModule ✔',
      subject: 'Walker Lee Love You ✔',
      // html: '<b>Welcome Frost!</b>',
      template: './welcome',
      context: {
        // Data to be sent to template engine.
        code: 'cf1a3f828287',
        username: 'walker lee',
      },
    });
  }
}
