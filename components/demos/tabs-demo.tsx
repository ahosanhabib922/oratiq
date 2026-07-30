import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm text-muted-foreground">Account settings panel.</p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm text-muted-foreground">Password settings panel.</p>
      </TabsContent>
      <TabsContent value="team">
        <p className="text-sm text-muted-foreground">Team settings panel.</p>
      </TabsContent>
    </Tabs>
  );
}
