import { type ReactNode, Suspense } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import fallbackRender from "./fallback-error";
import { FallbackSuspense } from "./fallback-suspense";

interface WithErrorBoundaryAndSuspenseOptions {
  errorFallback?: (props: FallbackProps) => ReactNode;
  loadingFallback?: ReactNode;
}

/**
 * Higher-Order Component that wraps a component with ErrorBoundary and Suspense
 * @param Component - The component to wrap
 * @param options - Configuration options for ErrorBoundary and Suspense
 * @returns A new component wrapped with ErrorBoundary and Suspense
 */
export function withErrorBoundaryAndSuspense<P extends object>(
  Component: React.ComponentType<P>,
  options: WithErrorBoundaryAndSuspenseOptions = {}
) {
  const {
    errorFallback = fallbackRender,
    loadingFallback = <FallbackSuspense />,
  } = options;

  // Return a new component that wraps the provided component with ErrorBoundary and Suspense
  const WrappedComponent = (props: P) => {
    return (
      <ErrorBoundary fallbackRender={errorFallback}>
        <Suspense fallback={loadingFallback}>
          <Component {...props} />
        </Suspense>
      </ErrorBoundary>
    );
  };

  // Set display name for better debugging
  const displayName = Component.displayName || Component.name || "Component";
  WrappedComponent.displayName = `withErrorBoundaryAndSuspense(${displayName})`;

  return WrappedComponent;
}
