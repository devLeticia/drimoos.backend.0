import fastify from "fastify"
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
    port: 7777
}).then(() => {
    console.log('Drimoos is Running!')
})