import type React from "react";
import { Suspense } from "react";
import "./styles.css";
import { Toaster } from "@/components/ui/sonner";
import { TRPCReactProvider } from "@/trpc/client";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const metadata = {
  description: "e-commerce multitenant",
  title: "E-commerce",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <main>
          <Suspense>
            <TRPCReactProvider>
              <NuqsAdapter>
                {children}
                <Toaster />
              </NuqsAdapter>
            </TRPCReactProvider>
          </Suspense>
        </main>
      </body>
    </html>
  );
}
