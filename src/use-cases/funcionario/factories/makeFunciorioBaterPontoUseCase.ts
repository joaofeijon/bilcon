import { PrismaFuncionarioRepository } from "@/http/repositories/prisma/prismaFuncionarioRepository"
import { RegistrarFuncionarioUseCase } from "../registrar"
import { baterPontoFuncionarioUseCase } from "../baterPonto"

export function makeFuncionarioBaterPontoUseCase() {
  const UserRepository = new PrismaFuncionarioRepository()
  const baterPontoUseCase = new baterPontoFuncionarioUseCase(UserRepository)

  return baterPontoUseCase
}