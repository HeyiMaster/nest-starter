import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局使用中间件
  // app.use(logger)

  // 设置swagger文档相关配置
  const swaggerOptions = new DocumentBuilder()
    .setTitle('nest-starter api document')
    .setDescription('nest starter project api document')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
}
bootstrap();
