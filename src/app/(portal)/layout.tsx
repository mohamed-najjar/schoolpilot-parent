import { redirect } from "next/navigation";
import { currentSession, SessionExpired } from "@/lib/auth/session";
import { recordKey } from "@/lib/auth/crypto";
import FamilyLayout from "@/layout/FamilyLayout";
import { ErrorState } from "@/components/States";
export const dynamic = "force-dynamic";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  let id: string | undefined;
  let error: unknown;
  try {
    id = (await currentSession()).id;
  } catch (e) {
    if (e instanceof SessionExpired) redirect("/login");
    error = e;
  }
  if (!id) return <ErrorState error={error} />;
  return <FamilyLayout key={recordKey(id)}>{children}</FamilyLayout>;
}
