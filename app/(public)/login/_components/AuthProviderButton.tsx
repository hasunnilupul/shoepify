"use client";

import { Button } from "@/components/ui/button";
import { loginWithProvider } from "../actions";

export default function AuthProviderButton({
  children,
  provider,
}: Readonly<{
  children: React.ReactNode;
  provider: string;
}>) {
  return (
    <form action={async () => await loginWithProvider(provider)}>
      <Button type="submit" variant="outline" className="w-full">
        {children}
      </Button>
    </form>
  );
}
