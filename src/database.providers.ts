import * as mongoose from "mongoose";
import { environments } from "./config/environments";

export const databaseProviders = [
  {
    provide: "DATABASE_CONNECTION",
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(environments.database.connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
  }
];
