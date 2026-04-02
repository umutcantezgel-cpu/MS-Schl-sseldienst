export function hashString(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return Math.abs(hash);
}

export function pickVariant<T>(variants: T[], salt: string, offset = 0): T {
  if (variants.length === 0) return "" as unknown as T;
  const hash = hashString(salt) + offset;
  return variants[hash % variants.length] as T;
}
