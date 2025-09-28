import * as React from "react"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import ClientsFilter from "./components/ClientsFilter"
import ClientsSearch from "./components/ClientsSearch"
import ClientsMural from "./components/ClientsMural"

const SAMPLE = [
	{ id: 1, name: "João Silva", company: "ACME Ltda", phone: "+55 11 99999-0000", tag: "Parceiro" },
	{ id: 2, name: "Maria Souza", company: "Cliente X", phone: "+55 21 98888-1111", tag: "VIP" },
	{ id: 3, name: "Carlos Pereira", company: "Empresa Y", phone: "+55 31 97777-2222", tag: "Potencial" },
	{ id: 4, name: "Ana Costa", company: "ACME Ltda", phone: "+55 41 96666-3333", tag: "Parceiro" },
]

export default function ClientesPage() {
	const [q, setQ] = React.useState("")
	const [filter, setFilter] = React.useState("")

	const tags = Array.from(new Set(SAMPLE.map((s) => s.tag).filter(Boolean)))

	const filtered = SAMPLE.filter((c) => {
		const matchesFilter = filter ? c.tag === filter : true
		const matchesQuery = q ? `${c.name} ${c.company} ${c.phone}`.toLowerCase().includes(q.toLowerCase()) : true
		return matchesFilter && matchesQuery
	})

	return (
		<div className="p-4">
			<Card>
				<CardHeader className="flex items-center justify-between">
					<CardTitle>Clientes</CardTitle>
					<div className="flex items-center gap-2">
						<ClientsSearch value={q} onChange={setQ} />
						<ClientsFilter value={filter} onChange={setFilter} options={tags} />
					</div>
				</CardHeader>

				<CardContent>
					<ClientsMural clients={filtered} />
				</CardContent>
			</Card>
		</div>
	)
}
