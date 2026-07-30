import { Code, Heading, Text, TextLink } from "@/components/ui/typography";

export default function TypographyDemo() {
  return (
    <div className="w-full max-w-lg space-y-3">
      <Heading level={3}>Build interfaces that read both ways</Heading>
      <Text tone="muted">
        Install with <Code>npx @oratiq-js/ui init</Code>, then read the{" "}
        <TextLink href="/design-library/theming">theming guide</TextLink>.
      </Text>
    </div>
  );
}
