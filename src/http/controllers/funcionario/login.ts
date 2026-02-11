import { z } from "zod"
import { FastifyRequest, FastifyReply } from "fastify"


import { makeFuncionarioUserProductUseCase } from "@/use-cases/funcionario/factories/makeFuncionarioUserProductUseCase"
import { InvalidLoginError } from "@/use-cases/funcionario/erros/invalidLogin"

export async function login(request: FastifyRequest, reply: FastifyReply) {
  const loginBodySchema = z.object({
    email: z.string(),
    password: z.string()
  })

  const body = loginBodySchema.parse(request.body)

  try {
    const loginUseCase = makeFuncionarioUserProductUseCase()
    const { token, cargo } = await loginUseCase.execute(body)

    reply.status(200).send({
      token,
      cargo
    })
  } catch (err) {
    if (err instanceof InvalidLoginError) {
      return reply.status(401).send({ message: err.message })
    }

    throw err
  }


}