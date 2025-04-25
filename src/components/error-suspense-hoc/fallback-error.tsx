"use client";
import { Button } from "@/components/ui/button";
import type { FallbackProps } from "react-error-boundary";

function fallbackRender({ error, resetErrorBoundary }: FallbackProps) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div
      role="alert"
      className="mt-16 min-h-[50dvh] flex flex-col items-center justify-center"
    >
      <div className="border border-error rounded-lg p-4 flex flex-col items-center justify-center gap-4">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>

        <Button variant="destructive" onClick={resetErrorBoundary}>
          Try again
        </Button>
      </div>
    </div>
  );
}

export default fallbackRender;
