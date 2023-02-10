import { randomUUID } from "crypto";
import { FastifyInstance } from "fastify";
import { z } from "zod";
import { knex } from "../database";

export async function dreamsRoutes(app: FastifyInstance) {
  app.get("/", async (request, reply) => {
    const test = await knex("sqlite_schema").select("*");
    return test;
  });

  app.post("/", async (request, reply) => {
    const createDreamBodySchema = z.object({
      user_id: z.string().optional(),
      //created_at: z.date(),
      //date: z.date(),
      //edited_at: z.date(),
      title: z.string(),
      description: z.string(),
      feelings: z.array(z.enum(["love", "peace", "fear", "joy", "angry"])),
      intensity: z.array(z.enum(["low", "medium", "high"])),
      keyWords: z.array(z.string()),
      lifeContext: z.string(),
      lifeCategories: z.array(
        z.enum(["family", "career", "health", "spirituality"])
      ),
      timeReference: z.enum(["past", "present", "future"]),
      source: z.enum(["mind", "soul", "spirit"]),
      intepretation: z.string(),
      purpose: z.enum(["alert", "prophecy", "direction"]),
    });

    const {
      title,
      description,
      feelings,
      intensity,
      keyWords,
      lifeContext,
      lifeCategories,
      timeReference,
      source,
      intepretation,
      purpose,
    } = createDreamBodySchema.parse(request.body);
    const dream = {
      id: randomUUID(),
      created_at: new Date(),
      title,
      description,
      feelings,
      intensity,
      keyWords,
      lifeContext,
      lifeCategories,
      timeReference,
      source,
      intepretation,
      purpose,
    };

    return reply.status(201).send();
  });
}
