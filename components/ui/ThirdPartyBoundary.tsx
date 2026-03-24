"use client";

import { Component, type ReactNode } from "react";

interface ThirdPartyBoundaryProps {
  /** Fallback UI when the third-party widget crashes */
  fallback: ReactNode;
  /** Name of the third-party service (for logging) */
  serviceName?: string;
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Error boundary specifically for third-party integrations.
 * Isolates external widget crashes so they never break the page.
 *
 * @example
 * <ThirdPartyBoundary
 *   fallback={<MapFallback />}
 *   serviceName="Google Maps"
 * >
 *   <GoogleMapsEmbed />
 * </ThirdPartyBoundary>
 */
export default class ThirdPartyBoundary extends Component<
  ThirdPartyBoundaryProps,
  State
> {
  constructor(props: ThirdPartyBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error(
      `[ThirdPartyBoundary] ${this.props.serviceName || "Unknown"} crashed:`,
      error.message
    );
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
