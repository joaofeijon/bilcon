import { z } from "zod"
import { FastifyRequest, FastifyReply } from "fastify"


import { InvalidLoginError } from "@/use-cases/funcionario/erros/invalidLogin"
import { makeFuncionarioLoginUseCase } from "@/use-cases/funcionario/factories/makeFuncionarioLoginUseCase"

export async function baterPonto(request: FastifyRequest, reply: FastifyReply) {
  const baterPontoBodySchema = z.object({
    tipo: z.string()
  })

  const body = baterPontoBodySchema.parse(request.body)

  try {
    const loginUseCase = makeFuncionarioLoginUseCase()
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