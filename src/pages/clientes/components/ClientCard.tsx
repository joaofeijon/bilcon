import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Client = {
  id: number
  name: string
  company?: string
  phone?: string
  tag?: string
}

export default function ClientCard({ client }: { client: Client }) {
  const initials = client.name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("")

  return (
    <Card className="h-full">
      <CardHeader className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-sm font-medium text-slate-700">
            {initials}
          </div>
          <div>
            <div className="font-semibold">{client.name}</div>
            {client.company && <div className="text-sm text-muted-foreground">{client.company}</div>}
          </div>
        </div>
        <div className="text-xs text-muted-foreground">{client.tag}</div>
      </CardHeader>

      <CardContent className="pt-2">
        {client.phone ? (
          <div className="text-sm text-muted-foreground">{client.phone}</div>
        ) : (
          <div className="text-sm text-muted-foreground">Sem telefone</div>
        )}
      </CardContent>

      <CardFooter>
        <Button variant="ghost" size="sm">
          Detalhes
        </Button>
      </CardFooter>
    </Card>
  )
}
