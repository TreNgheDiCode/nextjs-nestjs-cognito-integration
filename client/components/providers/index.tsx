"use client";

import { getQueryClient } from "@/lib/queryClient";
import { ThemeProvider } from "./themeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "../ui/sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster richColors closeButton />
        <ReactQueryDevtools />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
