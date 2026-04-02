import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function getParam(name: string, searchParams: URLSearchParams): string | null {
  return searchParams.get(name);
}

export function getNumberParam(name: string, searchParams: URLSearchParams, defaultValue: number = 0): number {
  const param = searchParams.get(name);
  if (param === null) return defaultValue;
  const parsed = parseInt(param, 10);
  return isNaN(parsed) ? defaultValue : parsed;
}

export function setParam(
  name: string, 
  value: string | null, 
  router: AppRouterInstance, 
  pathname: string, 
  searchParams: URLSearchParams
) {
  const current = new URLSearchParams(Array.from(searchParams.entries()));
  
  if (value === null) {
    current.delete(name);
  } else {
    current.set(name, value);
  }

  const query = current.toString();
  router.push(`${pathname}${query ? `?${query}` : ''}`, { scroll: false });
}

export function removeParam(
  name: string, 
  router: AppRouterInstance, 
  pathname: string, 
  searchParams: URLSearchParams
) {
  setParam(name, null, router, pathname, searchParams);
}

export function buildQueryString(params: Record<string, string | null>) {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== null) {
      searchParams.set(key, value);
    }
  }
  return searchParams.toString();
}
