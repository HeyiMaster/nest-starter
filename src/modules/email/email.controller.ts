import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get()
  sendEmail(): string {
    this.emailService.sendEmail();
    return 'ok';
  }
}
