import { Marker, MarkerSurface } from "@/components/ui/marker";

export default function MarkerDemo() {
  return (
    <MarkerSurface className="h-48 w-full max-w-md overflow-hidden rounded-lg bg-linear-to-br from-muted to-card">
      <Marker x={25} y={35} label="Chest" pulse>
        1
      </Marker>
      <Marker x={62} y={60} tone="info" label="Shoulders">
        2
      </Marker>
    </MarkerSurface>
  );
}
