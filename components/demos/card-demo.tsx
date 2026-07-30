import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Ultimate Workout</CardTitle>
        <CardDescription>An eight-week strength programme.</CardDescription>
      </CardHeader>
      <CardContent>
        Four sessions a week with progressive overload and a deload in week
        five.
      </CardContent>
      <CardFooter>
        <Button size="sm">Start plan</Button>
        <Button size="sm" variant="ghost">
          Preview
        </Button>
      </CardFooter>
    </Card>
  );
}
