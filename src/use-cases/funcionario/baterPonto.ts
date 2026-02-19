import { compare, hash } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { InvalidLoginError } from "./erros/invalidLogin"
import type { FuncionarioRepository } from "@/http/repositories/funcionarioRepository"

interface baterPontoUseCaseRequest {
  tipo: string
}

interface baterPontoUseCaseResponse {
  token: string
  cargo: string
}

export class baterPontoFuncionarioUseCase {
  constructor(private FuncionarioRepository: FuncionarioRepository) { }

  async execute({
    tipo
  }: baterPontoUseCaseRequest): Promise<baterPontoUseCaseResponse> {
    const user = await this.FuncionarioRepository.findByEmail({ email })

    if (user == null) {
      throw new InvalidLoginError()
    }

    const passwordMatch = await compare(password, user.senha)

    if (!passwordMatch) {
      throw new InvalidLoginError()
    }


    const token = sign(
      {
        sub: user.id,
        cargo: user.cargo,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1d",
      }
    )


    return {
      token,
      cargo: user.cargo
    }
  }
}