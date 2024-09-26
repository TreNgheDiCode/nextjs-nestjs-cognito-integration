"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const onClick = () => {
    signIn("cognito");
  };

  return (
    <div>
      <Button onClick={onClick}>Login</Button>
    </div>
  );
}
