"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export default function ButtonLoadingDemo() {
  const [saving, setSaving] = React.useState(false);

  function save() {
    setSaving(true);
    setTimeout(() => setSaving(false), 2000);
  }

  return (
    <Button loading={saving} loadingText="Saving…" onClick={save}>
      Save changes
    </Button>
  );
}
