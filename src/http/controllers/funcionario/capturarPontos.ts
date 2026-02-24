import { FastifyRequest, FastifyReply } from "fastify"

import { InvalidLoginError } from "@/use-cases/funcionario/erros/invalidLogin"
import { makeFunciorioCapturarPontoUseCase } from "@/use-cases/funcionario/factories/makeFunciorioCapturarPontoUseCase"

export async function capturarPontos(request: FastifyRequest, reply: FastifyReply) {
  try {
    const capturarPontos = makeFunciorioCapturarPontoUseCase()
    const { pontos } = await capturarPontos.execute()

    reply.status(200).send({
      pontos
    })
  } catch (err) {
    throw err
  }
}