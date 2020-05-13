import * as path from 'path';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MailerModule } from '@nest-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { HelloModule } from './modules/hello/hello.module';
import { ExceptionModule } from './modules/exception/exception.module';
import { RoleGuardModule } from './modules/role-guard/role-guard.module';
import { EmailModule } from './modules/email/email.module';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: 'smtps://1255968521@qq.com:tsjjzmqcmhmoheje@smtp.qq.com',
        defaults: {
          from: '"nest-modules" <modules@nestjs.com>',
        },
        template: {
          dir: path.join(__dirname, './templates/email'),
          adapter: new PugAdapter(),
          options: {
            strict: true,
          },
        },
      })
    }),
    HelloModule,
    ExceptionModule,
    RoleGuardModule,
    EmailModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // 为 hello 路由添加中间件
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'hello', method: RequestMethod.POST })
      .forRoutes('hello');
  }
}
