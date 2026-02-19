import { prisma } from "@/lib/prisma"
import type { create, FindByEmail, FuncionarioRepository } from "../funcionarioRepository"
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

  async create(data: create): Promise<null> {
    await prisma.funcionario.create({
      data: {
        nome: data.nome,
        email: data.email,
        senha: data.password,
        cargo: 'funcionario',
        permissao: '1'
      }
    })

    return null
  }
}