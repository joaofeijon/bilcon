import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function CollaboratorRanking({ items = [] }: { items?: { name: string; count: number }[] }) {
  return (
    <Card>
      <CardHeader>
        <div className="text-sm font-semibold">Ranking de Colaboradores</div>
      </CardHeader>
      <CardContent>
        <ol className="list-decimal pl-5 space-y-2">
          {items.map((it, idx) => (
            <li key={idx} className="flex items-center justify-between">
              <div>{it.name}</div>
              <div className="text-sm text-muted-foreground">{it.count} respostas</div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}
