import { compare, hash } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { InvalidLoginError } from "./erros/invalidLogin"
import type { FuncionarioRepository } from "@/http/repositories/funcionarioRepository"
import { InvalidRegisterError } from "./erros/invalidRegister"

interface RegistrarFuncionarioUseCaseRequest {
  nome: string,
  email: string,
  password: string
}

interface RegistrarFuncionarioUseCaseResponse {
  message: string
}

export class RegistrarFuncionarioUseCase {
  constructor(private FuncionarioRepository: FuncionarioRepository) { }

  async execute({
    nome,
    email,
    password
  }: RegistrarFuncionarioUseCaseRequest): Promise<RegistrarFuncionarioUseCaseResponse> {
    const user = await this.FuncionarioRepository.findByEmail({ email })

    if (user) {
      throw new InvalidRegisterError()
    }

    const passwordHash = await hash(password, 8)

    await this.FuncionarioRepository.create({
      nome,
      email,
      password: passwordHash
    })

    return {
      message: "Funcionário registrado com sucesso"
    }
  }
}