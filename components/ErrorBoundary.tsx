"use client";

import { Component, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error) {
    console.error("ErrorBoundary caught:", error);
    trackEvent("ui_error", { 
      message: error.message,
      stack: error.stack,
      url: typeof window !== "undefined" ? window.location.href : "server"
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 border border-red-300 rounded shadow-sm m-4 lg:m-8 max-w-xl mx-auto">
          <h2 className="text-red-800 font-bold mb-2">Etwas ist schief gelaufen</h2>
          <p className="text-red-700 mb-4">{this.state.error?.message || "Ein unbekannter Fehler ist aufgetreten."}</p>
          <button 
            type="button"
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded font-medium transition-colors"
            onClick={() => this.setState({ hasError: false })}
          >
            Erneut versuchen
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
