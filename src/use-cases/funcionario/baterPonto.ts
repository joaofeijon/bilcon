import type { FuncionarioRepository } from "@/http/repositories/funcionarioRepository"
import { InvalidPontoError } from "./erros/invalidPonto"

interface baterPontoUseCaseRequest {
  tipo: number
}

interface baterPontoUseCaseResponse {
  message: string
}

export class baterPontoFuncionarioUseCase {
  constructor(private FuncionarioRepository: FuncionarioRepository) { }

  async execute({
    tipo
  }: baterPontoUseCaseRequest): Promise<baterPontoUseCaseResponse> {
    console.log("passo1")
    const ponto = await this.FuncionarioRepository.getPontoToday({ idUsuario: 1 })
    console.log("passo2", ponto)

    if (!ponto.length && tipo !== 0) throw new InvalidPontoError()
    console.log("passo3")

    if (ponto.length && ponto[ponto?.length - 1]?.tipo !== String(tipo - 1)) throw new InvalidPontoError()
    console.log("passo4")

    await this.FuncionarioRepository.insertPonto({
      idUsuario: 1,
      tipo: String(tipo)
    })

    return {
      message: "Ponto batido com sucesso!"
    }
  }
}