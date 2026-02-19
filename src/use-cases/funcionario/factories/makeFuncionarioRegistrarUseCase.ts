import { PrismaFuncionarioRepository } from "@/http/repositories/prisma/prismaFuncionarioRepository"
import { RegistrarFuncionarioUseCase } from "../registrar"

export function makeFuncionarioRegistrarUseCase() {
  const UserRepository = new PrismaFuncionarioRepository()
  const registerProductUseCase = new RegistrarFuncionarioUseCase(UserRepository)

  return registerProductUseCase
}