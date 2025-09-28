import MetricsCard from "./components/MetricsCard"
import MessagesChart from "./components/MessagesChart"
import CollaboratorRanking from "./components/CollaboratorRanking"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SAMPLE_MESSAGES = [5, 12, 8, 15, 10, 18, 20, 14, 9, 7, 13, 16]
const SAMPLE_COLLAB = [
  { name: "Ana", count: 120 },
  { name: "João", count: 98 },
  { name: "Maria", count: 75 },
]

export default function DashboardPage() {
  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MetricsCard title="Mensagens recebidas" value="1.234">
          <div className="text-sm text-muted-foreground">Últimos 30 dias</div>
        </MetricsCard>
        <MetricsCard title="Mensagens enviadas" value="987">
          <div className="text-sm text-muted-foreground">Últimos 30 dias</div>
        </MetricsCard>
        <MetricsCard title="Tempo médio de resposta" value="00:02:45">
          <div className="text-sm text-muted-foreground">Média</div>
        </MetricsCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Mensagens por dia</CardTitle>
          </CardHeader>
          <CardContent>
            <MessagesChart data={SAMPLE_MESSAGES} />
          </CardContent>
        </Card>

        <CollaboratorRanking items={SAMPLE_COLLAB} />
      </div>
    </div>
  )
}
