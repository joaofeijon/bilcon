import { Prisma, Funcionario } from "@prisma/client"

export interface FindByEmail {
  email: string
}

export interface FuncionarioRepository {
  findByEmail(data: FindByEmail): Promise<Funcionario | null>
}