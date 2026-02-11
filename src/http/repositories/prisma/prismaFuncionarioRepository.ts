import { prisma } from "@/lib/prisma"
import type { FindByEmail, FuncionarioRepository } from "../funcionarioRepository"
import type { Funcionario } from "@prisma/client"

export class PrismaFuncionarioRepository implements FuncionarioRepository {
  async findByEmail(data: FindByEmail): Promise<Funcionario | null> {
    const user = await prisma.funcionario.findUnique({
      where: {
        email: data.email,
      },
    })

    return user
  }
}