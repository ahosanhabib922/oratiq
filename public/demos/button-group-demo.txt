import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export default function ButtonGroupDemo() {
  return (
    <ButtonGroup label="Text alignment">
      <Button variant="outline">Start</Button>
      <Button variant="outline">Center</Button>
      <Button variant="outline">End</Button>
    </ButtonGroup>
  );
}
