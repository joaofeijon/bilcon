export default function MessagesChart({ data = [] }: { data?: number[] }) {
  // Simple sparkline using SVG
  const width = 300
  const height = 80
  const max = Math.max(...data, 1)
  const points = data.map((d, i) => `${(i / Math.max(data.length - 1, 1)) * width},${height - (d / max) * height}`).join(" ")

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="w-full">
      <polyline fill="none" stroke="#10b981" strokeWidth={2} points={points} />
    </svg>
  )
}
