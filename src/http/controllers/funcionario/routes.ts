import { FastifyInstance } from "fastify"
import { login } from "./login"
import { registrar } from "./registrar"

export async function funcionarioRoutes(app: FastifyInstance) {
  app.post("/login", login)
  app.post("/registrar", registrar)
}