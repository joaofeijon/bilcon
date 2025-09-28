import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function MetricsCard({ title, value, children }: { title: string; value: string; children?: React.ReactNode }) {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">{title}</div>
        <div className="text-lg font-semibold">{value}</div>
      </CardHeader>
      <CardContent className="pt-2">{children}</CardContent>
    </Card>
  )
}
