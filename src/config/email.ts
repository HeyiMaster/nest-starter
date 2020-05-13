import { join } from 'path';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

export default {
  transport: 'smtps://1255968521@qq.com:tsjjzmqcmhmoheje@smtp.qq.com',
  defaults: {
    from: '"nest-modules" <modules@nestjs.com>',
  },
  template: {
    dir: join(__dirname, '../templates/email'),
    adapter: new PugAdapter(),
    options: {
      strict: true,
    },
  },
};
