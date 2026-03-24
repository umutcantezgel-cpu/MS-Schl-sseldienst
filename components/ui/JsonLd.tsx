import * as React from "react";

/**
 * Type-safe JSON-LD component for structured data injection.
 * 
 * Server Component — renders a <script type="application/ld+json"> tag
 * with properly escaped JSON. Replaces manual dangerouslySetInnerHTML patterns.
 * 
 * @example
 * ```tsx
 * <JsonLd data={generateLocalBusinessSchema()} />
 * ```
 */
interface JsonLdProps<T extends Record<string, unknown>> {
  /** The structured data object (must include @context and @type) */
  data: T;
  /** Optional: nonce for CSP compliance */
  nonce?: string;
}

export function JsonLd<T extends Record<string, unknown>>({ data, nonce }: JsonLdProps<T>) {
  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
