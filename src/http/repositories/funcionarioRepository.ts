import { Prisma, Funcionario } from "@prisma/client"

export interface FindByEmail {
  email: string
}
export interface create {
  nome: string,
  email: string,
  password: string
}

export interface FuncionarioRepository {
  findByEmail(data: FindByEmail): Promise<Funcionario | null>
  create(data: create): Promise<null>
}