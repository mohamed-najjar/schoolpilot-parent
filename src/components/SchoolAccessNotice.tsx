"use client";
import useSWR from "swr";
import { Alert, Button } from "@mui/material";
import { usePreferences } from "@/components/Providers";
import { fetchJSON } from "@/lib/api/client";
// A bound-actor boolean only. No commercial records reach these role portals.
export default function SchoolAccessNotice({
  school,
}: {
  school: string | undefined;
}) {
  const { locale } = usePreferences();
  const ar = locale === "ar";
  const policy = useSWR<{ school_writes_allowed: boolean }>(
    school ? `/api/schools/${school}/me/access-policy` : null,
    fetchJSON,
    {
      refreshInterval: 15000,
      revalidateOnFocus: true,
      shouldRetryOnError: false,
      keepPreviousData: false,
    },
  );
  if (!school) return null;
  if (policy.error)
    return (
      <Alert
        severity="warning"
        sx={{ mb: 2 }}
        action={
          <Button color="inherit" onClick={() => void policy.mutate()}>
            {ar ? "تحديث" : "Refresh"}
          </Button>
        }
      >
        {ar
          ? "تعذر التحقق من صلاحية التعديل الحالية. أعد المحاولة قبل إجراء تغييرات."
          : "Current change access could not be verified. Refresh before making changes."}
      </Alert>
    );
  return policy.data?.school_writes_allowed === false ? (
    <Alert severity="warning" sx={{ mb: 2 }}>
      {ar
        ? "هذه المدرسة متاحة حالياً للقراءة فقط. يمكنك عرض السجلات المصرح بها. راجع إدارة المدرسة بشأن إتاحة التعديلات."
        : "This school currently allows read access. You can view authorized records. Contact the school administrator about changes."}
    </Alert>
  ) : null;
}
