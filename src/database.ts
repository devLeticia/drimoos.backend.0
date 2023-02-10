//connecting the app to the database

import { knex as setupKnex, Knex } from "Knex";

export const config: Knex.Config = {
  client: "sqlite", // sb were're using
  connection: {
    // infos about our connection
    filename: "./db/app.db",
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./db/migrations",
  },
};

export const knex = setupKnex(config);
