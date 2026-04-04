import { generateSharedMetadata } from "@/lib/metadata";

export const metadata = generateSharedMetadata({
  title: "Dev Dashboard",
  description: "Internes Monitoring Dashboard für Schlüssel Schmiede Wetzlar.",
  path: "/dev/dashboard",
  noindex: true,
});

export default function DevDashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
