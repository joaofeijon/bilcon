import { PrismaFuncionarioRepository } from "@/http/repositories/prisma/prismaFuncionarioRepository"

=

export function makeFuncionarioUserProductUseCase() {
  const UserRepository = new PrismaFuncionarioRepository()
  const registerProductUseCase = new LoginUserUseCase(UserRepository)

  return registerProductUseCase
}