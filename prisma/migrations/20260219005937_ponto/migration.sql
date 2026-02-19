-- AlterTable
ALTER TABLE "Funcionario" ADD COLUMN     "jornandaTrabalho" INTEGER NOT NULL DEFAULT 8;

-- CreateTable
CREATE TABLE "Ponto" (
    "id" SERIAL NOT NULL,
    "funcionarioId" INTEGER NOT NULL,
    "dataHora" TIMESTAMP(3) NOT NULL,
    "tipo" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ponto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ponto" ADD CONSTRAINT "Ponto_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "Funcionario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
