import { redirect } from "next/navigation";

/**
 * Phase 19 — Dev Dashboard Layout
 * Blocks access in production by redirecting to 404.
 */
export default function DevDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (process.env.NODE_ENV === "production") {
    redirect("/404");
  }
  return <>{children}</>;
}
