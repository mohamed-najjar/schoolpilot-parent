"use client";
import useSWR from "swr";
export class RequestError extends Error {
  constructor(
    public status: number,
    public reference?: string,
  ) {
    super("Request failed");
  }
}
export async function fetchJSON<T>(
  url: string,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(url, {
    ...init,
    cache: "no-store",
    credentials: "same-origin",
    redirect: "error",
    headers: { Accept: "application/json", ...init?.headers },
  });
  if (!response.ok) {
    let reference: string | undefined;
    try {
      reference = (await response.json()).request_id;
    } catch {}
    throw new RequestError(response.status, reference);
  }
  return response.json();
}
export type Page<T> = { items: T[] | null; next_cursor: string };
export function schoolURL(school: string, path: string) {
  return `/api/schools/${encodeURIComponent(school)}/${path}`;
}
export function useResource<T>(
  school: string | undefined,
  path: string | null,
  revision?: number,
) {
  const url = school && path ? schoolURL(school, path) : null;
  return useSWR<T>(
    url && revision !== undefined ? ([url, revision] as const) : url,
    (key: string | readonly [string, number]) =>
      fetchJSON<T>(typeof key === "string" ? key : key[0]),
    {
      keepPreviousData: false,
      revalidateOnFocus: true,
      shouldRetryOnError: false,
    },
  );
}
