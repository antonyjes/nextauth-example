"use client";

import { settings } from "@/actions/settings";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTransition } from "react";

const SettingsPage = () => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      try {
        settings({
          name: "New name",
        })
      } catch (error) {
        console.log("Error: ", error);
      }
    })
  }

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">
          ⚙ Settings
        </p>
      </CardHeader>
      <CardContent>
        <Button disabled={isPending} onClick={onClick}>Update name</Button>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
