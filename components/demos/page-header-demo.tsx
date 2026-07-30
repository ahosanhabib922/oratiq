import { Button } from "@/components/ui/button";
import {
  PageHeader,
  PageHeaderActions,
  PageHeaderContent,
  PageHeaderDescription,
  PageHeaderTitle,
  PageHeaderTop,
} from "@/components/ui/page-header";
import { Plus, Settings } from "lucide-react";

export default function PageHeaderDemo() {
  return (
    <div className="w-full">
      <PageHeader>
        <PageHeaderTop>
          <PageHeaderContent>
            <PageHeaderTitle>Workout plans</PageHeaderTitle>
            <PageHeaderDescription>
              Create, share, and track training programmes.
            </PageHeaderDescription>
          </PageHeaderContent>
          <PageHeaderActions>
            <Button variant="outline" size="sm">
              <Settings />
              Settings
            </Button>
            <Button size="sm">
              <Plus />
              New plan
            </Button>
          </PageHeaderActions>
        </PageHeaderTop>
      </PageHeader>
    </div>
  );
}
