export function validOrigin(request: Request, origin: string) {
  return (
    request.headers.get("origin") === origin &&
    (!request.headers.get("sec-fetch-site") ||
      request.headers.get("sec-fetch-site") === "same-origin")
  );
}
