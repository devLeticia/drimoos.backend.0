import { randomUUID } from 'crypto'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { knex } from '../database'
import { createDreamValidation } from '../validations/dreams/createDreamValidation'

export async function dreamsRoutes(app: FastifyInstance) {
  app.get('/', async (request, reply) => {
    const dreams = await knex('dreams').select('*')
    return dreams
  })

  app.get('/:id', async (request, reply) => {
    const getDreamsParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getDreamsParamsSchema.parse(request.params)

    const dream = await knex('dreams').where('id', id).first() // this tells knex we expect only one or undefined
git
    return dream
  })
  app.delete('/:id', async (request, reply) => {
    const getDreamsParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getDreamsParamsSchema.parse(request.params)

    const dream = await knex('dreams').delete().where('id', id) // this tells knex we expect only one or undefined

    return dream
  })

  app.post('/', async (request, reply) => {
    const validDream = createDreamValidation.parse(request.body)

    const {
      user_id,
      title,
      date,
      description,
      feelings,
      intensity,
      keywords,
      life_context,
      life_categories,
      time_reference,
      source,
      interpretation,
      purpose,
    } = validDream

    const response = await knex('dreams').insert({
      //user_id,
      id: randomUUID(),
      date,
      created_at: new Date(),
      title,
      description,
      feelings,
      intensity,
      keywords,
      life_context,
      life_categories,
      time_reference,
      source,
      interpretation,
      purpose,
    })

    return reply.status(201).send()
  })
}
