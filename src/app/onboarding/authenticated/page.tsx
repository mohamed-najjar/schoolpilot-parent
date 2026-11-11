import Authenticated from "@/features/onboarding/Authenticated";
import { currentSession, SessionExpired } from "@/lib/auth/session";
import { verifiedIdentity } from "@/lib/onboarding/server";
import { redirect } from "next/navigation";
export const metadata = { robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";
export default async function Page() {
  try {
    const { session } = await currentSession();
    await verifiedIdentity(session);
  } catch (error) {
    if (error instanceof SessionExpired) redirect("/login");
    throw error;
  }
  return <Authenticated />;
}
