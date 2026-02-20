import { prisma } from "@/lib/prisma"
import type { create, FindByEmail, FuncionarioRepository, getPontoToday, insertPonto } from "../funcionarioRepository"
import type { Funcionario, Ponto } from "@prisma/client"
import moment from "moment"

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

  async getPontoToday(data: getPontoToday): Promise<Ponto[]> {
    const ponto = await prisma.ponto.findMany({
      where: {
        funcionarioId: data.idUsuario,
        dataHora: {
          gte: moment().startOf('day').toDate(),
          lte: moment().endOf('day').toDate()
        }
      }
    })

    return ponto || []
  }

  async insertPonto(data: insertPonto): Promise<null> {
    await prisma.ponto.create({
      data: {
        funcionarioId: data.idUsuario,
        tipo: data.tipo,
        dataHora: moment().toDate()
      }
    })

    return null
  }
}