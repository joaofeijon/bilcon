import { Prisma, Funcionario, type Ponto } from "@prisma/client"

export interface FindByEmail {
  email: string
}
export interface create {
  nome: string,
  email: string,
  password: string
}
export interface getPontoToday {
  idUsuario: number
}
export interface insertPonto {
  idUsuario: number
  tipo: string
}

export interface FuncionarioRepository {
  findByEmail(data: FindByEmail): Promise<Funcionario | null>
  create(data: create): Promise<null>
  getPontoToday(data: getPontoToday): Promise<Ponto[]>
  insertPonto(data: insertPonto): Promise<null>
}