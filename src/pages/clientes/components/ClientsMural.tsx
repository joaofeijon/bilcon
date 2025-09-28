import ClientCard from "./ClientCard"

type Client = {
  id: number
  name: string
  company?: string
  phone?: string
  tag?: string
}

export default function ClientsMural({ clients }: { clients: Client[] }) {
  if (clients.length === 0) {
    return <div className="text-center text-sm text-muted-foreground">Nenhum cliente encontrado</div>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {clients.map((c) => (
        <ClientCard key={c.id} client={c} />
      ))}
    </div>
  )
}
