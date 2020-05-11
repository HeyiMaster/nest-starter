import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  Admin = 'Admin',
  User = 'User',
}

export class Hello {
  @ApiProperty({ example: 'Kitty', description: 'The name of the Cat' })
  name: string;

  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  age: number;

  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Cat',
  })
  breed: string;

  @ApiProperty({ enum: UserRole })
  role: UserRole;
}
