import { join } from 'path';
export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'xiaoerxiaoer',
  database: 'nest',
  entities: [join(__dirname, '../', '**/**.entity{.ts,.js}')],
  synchronize: true,
};
