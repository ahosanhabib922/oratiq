import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { CheckCircle2 } from "lucide-react";

export default function AlertDemo() {
  return (
    <Alert variant="success" className="max-w-md">
      <CheckCircle2 />
      <AlertContent>
        <AlertTitle>Saved</AlertTitle>
        <AlertDescription>Your changes are live.</AlertDescription>
      </AlertContent>
    </Alert>
  );
}
