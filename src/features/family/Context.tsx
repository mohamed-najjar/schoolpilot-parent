"use client";
import { createContext, useContext, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useSWR, { SWRConfig } from "swr";
import { fetchJSON, useResource, RequestError } from "@/lib/api/client";
import type { components } from "@/lib/api/generated/school";
export type Schema = components["schemas"];
export type PublicSchool = {
  id: string;
  code: string;
  name_en: string;
  name_ar: string;
};
export type FamilySchool = {
  school: PublicSchool;
  items: Schema["FamilyChild"][];
  next_cursor: string;
  local_date?: string;
  error_status?: number;
};
export type FamilyResponse = { schools: FamilySchool[] };
const Context = createContext<ReturnType<typeof useFamilyData> | null>(null);
function useFamilyData() {
  const data = useSWR<FamilyResponse>("/api/family", fetchJSON, {
    keepPreviousData: false,
    shouldRetryOnError: false,
    revalidateOnFocus: true,
  });
  const current = data.error ? undefined : data.data;
  const query = useSearchParams();
  const all =
    current?.schools.flatMap((s) =>
      s.items.map((child) => ({ child, school: s.school })),
    ) || [];
  const school = query.get("school"),
    child = query.get("child");
  const invalid =
    !!school !== !!child ||
    (!!school && !/^[a-f0-9-]{36}$/i.test(school)) ||
    (!!child && !/^[a-f0-9-]{36}$/i.test(child));
  const selected =
    school && child
      ? { schoolId: school, childId: child }
      : all[0]
        ? { schoolId: all[0].school.id, childId: all[0].child.id }
        : undefined;
  async function more(s: FamilySchool) {
    const next = await fetchJSON<FamilyResponse>(
      `/api/family?school_id=${s.school.id}&after=${s.next_cursor}`,
    );
    const page = next.schools[0];
    if (page.error_status) throw new RequestError(page.error_status);
    await data.mutate(
      (current) =>
        current
          ? {
              schools: current.schools.map((old) =>
                old.school.id === s.school.id
                  ? {
                      ...page,
                      items: [
                        ...new Map(
                          [...old.items, ...page.items].map((c) => [c.id, c]),
                        ).values(),
                      ],
                    }
                  : old,
              ),
            }
          : current,
      { revalidate: false },
    );
  }
  useEffect(() => {
    const handler = (event: PageTransitionEvent) => {
      if (event.persisted) window.location.reload();
    };
    window.addEventListener("pageshow", handler);
    return () => window.removeEventListener("pageshow", handler);
  }, []);
  return { ...data, data: current, all, selected, invalid, more };
}
function Inner({ children }: { children: React.ReactNode }) {
  const value = useFamilyData();
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function FamilyProvider({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
        dedupingInterval: 1000,
        revalidateOnFocus: true,
        shouldRetryOnError: false,
      }}
    >
      <Inner>{children}</Inner>
    </SWRConfig>
  );
}
export function useFamily() {
  const c = useContext(Context);
  if (!c) throw new Error("Missing family context");
  return c;
}
export function useChild() {
  const family = useFamily();
  const selected = family.invalid ? undefined : family.selected;
  const resource = useResource<Schema["FamilyContext"]>(
    selected?.schoolId,
    selected ? `guardian/children/${selected.childId}` : null,
  );
  return {
    ...resource,
    selected,
    school: family.data?.schools.find((s) => s.school.id === selected?.schoolId)
      ?.school,
    invalid: family.invalid,
  };
}
export function childQuery(school: string, child: string) {
  return `?school=${encodeURIComponent(school)}&child=${encodeURIComponent(child)}`;
}
