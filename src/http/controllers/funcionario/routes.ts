import { FastifyInstance } from "fastify"
import { login } from "./login"
import { registrar } from "./registrar"
import { capturarPontos } from "./capturarPontos"
import { baterPonto } from "./baterPonto"

export async function funcionarioRoutes(app: FastifyInstance) {
  app.post("/login", login)
  app.post("/registrar", registrar)
  app.post("/baterPonto", baterPonto)
  app.get("/capturarPontos", capturarPontos)
}