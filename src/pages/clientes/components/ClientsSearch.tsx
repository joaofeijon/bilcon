import { Input } from "@/components/ui/input"

export default function ClientsSearch({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="w-full">
      <Input placeholder="Buscar cliente..." value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}
