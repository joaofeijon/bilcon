import { PrismaFuncionarioRepository } from "@/http/repositories/prisma/prismaFuncionarioRepository"
import { LoginFuncionarioUseCase } from "../login"

export function makeFuncionarioUserProductUseCase() {
  const UserRepository = new PrismaFuncionarioRepository()
  const registerProductUseCase = new LoginFuncionarioUseCase(UserRepository)

  return registerProductUseCase
}