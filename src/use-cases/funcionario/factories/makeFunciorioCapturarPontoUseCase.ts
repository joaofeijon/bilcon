import { PrismaFuncionarioRepository } from "@/http/repositories/prisma/prismaFuncionarioRepository"
import { capturarPontoFuncionarioUseCase } from "../capturarPonto"

export function makeFunciorioCapturarPontoUseCase() {
  const UserRepository = new PrismaFuncionarioRepository()
  const capturarPontoUseCase = new capturarPontoFuncionarioUseCase(UserRepository)

  return capturarPontoUseCase
}