import type { FuncionarioRepository } from "@/http/repositories/funcionarioRepository"
import type { Ponto } from "@prisma/client"

interface capturarPontoUseCaseResponse {
  pontos: Ponto[]
}

export class capturarPontoFuncionarioUseCase {
  constructor(private FuncionarioRepository: FuncionarioRepository) { }

  async execute(): Promise<capturarPontoUseCaseResponse> {
    const pontos = await this.FuncionarioRepository.getPontoToday({ idUsuario: 1 })

    return {
      pontos
    }
  }
}