const id = "[a-fA-F0-9-]{36}";
const read = [
  "guardian/children",
  "guardian/profile",
  `guardian/children/${id}(?:/contacts)?`,
  `students/${id}/(?:assignments|assignment-summary|attendance|academic-grades|academic-progress|report-cards)`,
  `attendance-records/${id}/history`,
  "lessons",
  "learning-content",
  `learning-content/${id}`,
  `learning-files/${id}`,
  `assignments/${id}`,
  `assignment-recipients/${id}(?:/(?:feedback|submissions))?`,
  `report-cards/${id}`,
  "announcements",
  "conversations",
  `conversations/${id}/messages`,
  `message-attachments/${id}`,
  "notifications",
  "notification-preferences",
];
export function guardianRoute(method: string, path: string) {
  if (method === "GET")
    return read.some((r) => new RegExp("^(?:" + r + ")$").test(path));
  if (method === "PUT") return path === "notification-preferences";
  return (
    method === "POST" &&
    [
      "conversations",
      `conversations/${id}/(?:messages|attachments)`,
      `notifications/${id}/read`,
    ].some((r) => new RegExp("^(?:" + r + ")$").test(path))
  );
}
