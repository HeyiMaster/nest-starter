import { Module } from '@nestjs/common';
import { ExceptionController } from './exception.controller';
import { ExceptionService } from './exception.service';

@Module({
  imports: [],
  controllers: [ExceptionController],
  providers: [ExceptionService],
})
export class ExceptionModule {}
