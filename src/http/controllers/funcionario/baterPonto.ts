import { z } from "zod"
import { FastifyRequest, FastifyReply } from "fastify"


import { InvalidLoginError } from "@/use-cases/funcionario/erros/invalidLogin"
import { makeFuncionarioLoginUseCase } from "@/use-cases/funcionario/factories/makeFuncionarioLoginUseCase"
import { makeFuncionarioBaterPontoUseCase } from "@/use-cases/funcionario/factories/makeFunciorioBaterPontoUseCase"

export async function baterPonto(request: FastifyRequest, reply: FastifyReply) {
  const baterPontoBodySchema = z.object({
    tipo: z.number()
  })

  const body = baterPontoBodySchema.parse(request.body)

  try {
    const baterPontoUseCase = makeFuncionarioBaterPontoUseCase()
    const { message } = await baterPontoUseCase.execute(body)

    reply.status(200).send({
      message
    })
  } catch (err) {
    if (err instanceof InvalidLoginError) {
      return reply.status(401).send({ message: err.message })
    }

    throw err
  }


}