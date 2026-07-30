import { QRCode } from "@/components/ui/qr-code";

export default function QRCodeDemo() {
  return <QRCode value="https://ui.oratiq.com" size={140} label="Oratiq docs" />;
}
