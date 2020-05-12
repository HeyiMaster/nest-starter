import { Module } from '@nestjs/common';
import { RoleGuardController } from './role-guard.controller';
import { RoleGuardService } from './role-guard.service';

@Module({
  imports: [],
  controllers: [RoleGuardController],
  providers: [RoleGuardService],
})
export class RoleGuardModule {}
