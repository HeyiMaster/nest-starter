import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { UsersEntity } from '../users/users.entity';

@Entity({ name: 'photo' })
export class PhotoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => UsersEntity,
    user => user.photos,
  )
  user: UsersEntity;

  @Column({ type: 'varchar', length: 80 })
  url: string;
}
