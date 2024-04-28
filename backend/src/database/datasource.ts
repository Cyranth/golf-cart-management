import { DataSourceOptions, DataSource } from 'typeorm';

const { DEBUG, POSTGRES_HOST, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_DB, NODE_ENV } =
  process.env;

const fileExtensions = NODE_ENV === 'production' ? 'js' : 'ts';

export const dataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: NODE_ENV === 'production',
  migrationsRun: NODE_ENV === 'production',
  logging: DEBUG === 'true',
  entities: [`src/**/*entity.${fileExtensions}`],
  migrations: [`src/database/migrations/*.${fileExtensions}`],
};

export const dataSource = new DataSource(dataSourceConfig);
