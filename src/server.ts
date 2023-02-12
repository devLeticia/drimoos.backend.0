import fastify from "fastify"
import { env } from "./env/index"

import { backofficeRoutes } from "./routes/backoffice"
import { dreamsRoutes } from "./routes/dreams"
import { journalsRoutes } from "./routes/journals"
import { usersRoutes } from "./routes/users"

const app = fastify()

app.register(usersRoutes, {
    prefix: 'users'
})

app.register(dreamsRoutes, {
    prefix: 'dreams'
})

app.register(journalsRoutes, {
    prefix: 'journals'
})

app.register(backofficeRoutes, {
    prefix: 'backoffice'
})

app.listen({
    port: env.PORT
}).then(() => {
    console.log('Drimoos is Running!')
})