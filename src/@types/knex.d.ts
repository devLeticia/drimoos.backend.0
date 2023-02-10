//table cols and types definitions

import { Knex } from "knex";

declare module "knex/type/table" {
  export interface Tables {
    dreams: {
      user_id: string;
      created_at: string;
      date: string;
      edited_at: string;
      title: string;
      description: string;
      feelings: string;
      intensity: string;
      keyWords: string;
      lifeContext: string;
      lifeCategories: string;
      timeReference: string;
      source: string;
      intepretation: string;
      purpose: string;
    };
  }
}
