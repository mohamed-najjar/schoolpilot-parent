"use client";
import { ErrorState } from "@/components/States";
export default function Error({ reset }: { reset: () => void }) {
  return <ErrorState error={null} retry={reset} />;
}
