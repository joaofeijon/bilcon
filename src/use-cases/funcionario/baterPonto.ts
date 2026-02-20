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
    const ponto = await this.FuncionarioRepository.getPontoToday({ idUsuario: 1 })

    if (!ponto.length && tipo !== 0) throw new InvalidPontoError()

    if (ponto[ponto.length - 1].tipo !== String(tipo - 1)) throw new InvalidPontoError()

    await this.FuncionarioRepository.insertPonto({
      idUsuario: 1,
      tipo: String(tipo)
    })

    return {
      message: "Ponto batido com sucesso!"
    }
  }
}