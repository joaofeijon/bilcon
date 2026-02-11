import { FastifyInstance } from "fastify"
import { login } from "./login"

export async function funcionarioRoutes(app: FastifyInstance) {
  app.post("/login", login)
}