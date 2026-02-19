import { z } from "zod"
import { FastifyRequest, FastifyReply } from "fastify"

import { InvalidLoginError } from "@/use-cases/funcionario/erros/invalidLogin"

import { makeFuncionarioRegistrarUseCase } from "@/use-cases/funcionario/factories/makeFuncionarioRegistrarUseCase"

export async function registrar(request: FastifyRequest, reply: FastifyReply) {
  const registrarBodySchema = z.object({
    nome: z.string(),
    email: z.string(),
    password: z.string()
  })

  const body = registrarBodySchema.parse(request.body)

  try {
    const loginUseCase = makeFuncionarioRegistrarUseCase()
    const { message } = await loginUseCase.execute(body)

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