import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import CalendlyConsentGate from "@/components/booking/CalendlyConsentGate";
import { useConsent } from "@/hooks/useConsent";

// Mock the useConsent hook
vi.mock("@/hooks/useConsent", () => ({
  useConsent: vi.fn(),
}));

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", async () => {
  const actual = await vi.importActual("framer-motion");
  return {
    ...actual,
    AnimatePresence: ({ children }: any) => <>{children}</>,
    m: {
      div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
  };
});

describe("CalendlyConsentGate", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the Two-Click-Solution fallback when marketing consent is denied/null", () => {
    (useConsent as any).mockReturnValue({
      consent: { marketing: false, analytics: false },
      updateConsent: vi.fn(),
      openSettings: vi.fn(),
    });

    render(
      <CalendlyConsentGate>
        <div data-testid="calendly-widget" />
      </CalendlyConsentGate>
    );

    // Verify fallback UI
    expect(screen.getByText("Terminbuchung blockiert")).toBeInTheDocument();
    expect(screen.queryByTestId("calendly-widget")).not.toBeInTheDocument();
  });

  it("renders the Calendly widget directly when marketing consent is granted", () => {
    (useConsent as any).mockReturnValue({
      consent: { marketing: true, analytics: false },
      updateConsent: vi.fn(),
      openSettings: vi.fn(),
    });

    render(
      <CalendlyConsentGate>
        <div data-testid="calendly-widget" />
      </CalendlyConsentGate>
    );

    expect(screen.getByTestId("calendly-widget")).toBeInTheDocument();
    expect(screen.queryByText("Terminbuchung blockiert")).not.toBeInTheDocument();
  });

  it("calls updateConsent with marketing: true when 'Zustimmen & Kalender laden' is clicked", () => {
    const updateConsentMock = vi.fn();
    (useConsent as any).mockReturnValue({
      consent: { marketing: false, analytics: true },
      updateConsent: updateConsentMock,
      openSettings: vi.fn(),
    });

    render(
      <CalendlyConsentGate>
        <div data-testid="calendly-widget" />
      </CalendlyConsentGate>
    );

    const acceptBtn = screen.getByText("Zustimmen & Kalender laden");
    fireEvent.click(acceptBtn);

    expect(updateConsentMock).toHaveBeenCalledWith({ marketing: true, analytics: true });
  });

  it("calls openSettings when the settings button is clicked", () => {
    const openSettingsMock = vi.fn();
    (useConsent as any).mockReturnValue({
      consent: { marketing: false, analytics: false },
      updateConsent: vi.fn(),
      openSettings: openSettingsMock,
    });

    render(
      <CalendlyConsentGate>
        <div data-testid="calendly-widget" />
      </CalendlyConsentGate>
    );

    const settingsBtn = screen.getByText("Cookie-Einstellungen anpassen");
    fireEvent.click(settingsBtn);

    expect(openSettingsMock).toHaveBeenCalledOnce();
  });
});
