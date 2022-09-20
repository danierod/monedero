import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "admin",
  database: "monederodb",
  synchronize: true,
  logging: true,
  entities: ["src/entity/*.*"],
});
