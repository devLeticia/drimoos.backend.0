// will give us access to all env variables through process.env
import 'dotenv/config' 
import { z } from 'zod'

// we make this validation in all env variables, so we dont have to validate each a time
// it's important because if a variable is need for the app to run, our validation will catch any problems with validations
// and will warn us about it - ex: DATABASE_URL is required and must be a string, if we dont have, server should not start

//validation schema, add as many env variables you need
const envSchema = z.object({
        NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
        DATABASE_URL: z.string(),
        PORT: z.number().default(7777)
})



// here we're making the validation of our schema
const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
    console.error('Invalid environment variables!', _env.error.format())
    throw new Error('')
}

export const env = _env.data