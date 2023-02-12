// d. ->  definition types

import { Knex } from 'knex'
import Dream from './dreamType'

declare module 'knex/type/table' {
  export interface Tables {
    dreams: Dream
  }
}
