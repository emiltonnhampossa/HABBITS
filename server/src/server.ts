import Fastify from "fastify";
import Cors from "@fastify/cors"
import { PrismaClient } from "@prisma/client";

const app = Fastify()
const prisma = new PrismaClient()

app.register(Cors)

app.get('/', async () => {
    const habits = await prisma.habit.findMany()

    return habits
})

app.listen({
    port:3000,
}).then(() => {
    console.log('Server is running on port 3000')
})