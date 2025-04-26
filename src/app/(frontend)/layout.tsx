import type React from "react";
import "./styles.css";
import { Toaster } from "@/components/ui/sonner";
import { TRPCReactProvider } from "@/trpc/client";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const metadata = {
  description: "A blank template using Payload in a Next.js app.",
  title: "Payload Blank Template",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <main>
          <TRPCReactProvider>
            <NuqsAdapter>
              {children}
              <Toaster />
            </NuqsAdapter>
          </TRPCReactProvider>
        </main>
      </body>
    </html>
  );
}
