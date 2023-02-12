import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('dreams', (table) => {
    table.uuid('id').primary().index() // adicionar o .index() -> pra fazer sinalizar que vai fazer queries a partir disso (na verdade é no userId)
    //table.foreign('user_id').references('user_id').inTable('users')
    table.string('title').notNullable() // 255 characters long
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable() //knex.fn.now will return current day in all db formats
    table.timestamp('date').notNullable()
    table.text('description').notNullable() // 30,000 characters.
    table.specificType('feelings', 'ENUM[]')
    table.enum('intensity', ['low', 'medium', 'high'])
    table.text('keywords')
    table.text('life_context')
    table.specificType('life_categories', 'ENUM[]')
    // table.enum('life_categories', [
    //   'family',
    //   'relationship',
    //   'health',
    //   'emotions',
    //   'professional',
    //   'finance',
    //   'friendship',
    //   'career',
    //   'spiritualiy',
    //   'social',
    // ])
    table.enum('time_reference', ['past', 'present', 'future'])
    table.enum('source', ['body', 'soul', 'spirit'])
    table.text('interpretation')
    table.specificType('purpose', 'ENUM[]')
    // table.enum('purpose', ['warning', 'prophecy', 'direction', 'revelation'])
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('dreams')
}
