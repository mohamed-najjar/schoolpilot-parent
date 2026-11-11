"use client";
import dynamic from "next/dynamic";
import { Loading } from "@/components/States";
// Browser fragments never participate in server rendering or hydration state.
const Onboarding = dynamic(() => import("./Onboarding"), {
  ssr: false,
  loading: () => <Loading />,
});
export default Onboarding;
