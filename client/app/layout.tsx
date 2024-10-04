import Providers from "@/components/providers";
import { auth } from "@/lib/auth";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wonder CRM",
  icons: "/images/favicon.png",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <body className={`antialiased`}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </SessionProvider>
  );
}
