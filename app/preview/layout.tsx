import { generateSharedMetadata } from "@/lib/metadata";

export const metadata = generateSharedMetadata({
  title: "Preview",
  description: "Interne Vorschauseite für Schlüssel Schmiede Wetzlar.",
  path: "/preview",
  noindex: true,
});

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
