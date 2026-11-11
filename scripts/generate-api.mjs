import { readFile, writeFile, mkdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import openapiTS, { astToString } from "openapi-typescript";
const backend = process.env.BACKEND_SOURCE || "../schoolpilot";
await mkdir("src/lib/api/generated", { recursive: true });
const manifest = {};
const checking = process.argv.includes("--check");
async function output(file, content) {
  if (checking) {
    if ((await readFile(file, "utf8")) !== content)
      throw new Error("Generated API drift: " + file);
  } else await writeFile(file, content);
}
// Generate only this browser application's contract surface. Follow every local
// component reference transitively so reusable response/error types remain intact.
function browserContract(document, kind) {
  const paths = Object.fromEntries(
    Object.entries(document.paths).filter(([path]) =>
      kind === "control"
        ? [
            "/api/v1/schools",
            "/api/v1/onboarding/identity",
            "/api/v1/onboarding/resolve",
          ].includes(path)
        : path.startsWith("/api/v1/"),
    ),
  );
  const components = {
    securitySchemes: document.components?.securitySchemes || {},
    schemas: {},
  };
  const seen = new Set();
  function references(value) {
    if (!value || typeof value !== "object") return;
    if (typeof value.$ref === "string") {
      const reference = value.$ref;
      if (!reference.startsWith("#/components/") || seen.has(reference)) return;
      seen.add(reference);
      const parts = reference
        .slice(2)
        .split("/")
        .map((part) => part.replaceAll("~1", "/").replaceAll("~0", "~"));
      if (parts.length !== 3)
        throw new Error("Unsupported component reference");
      const [, category, name] = parts;
      const node = document.components?.[category]?.[name];
      if (!node) throw new Error("Unresolved component reference");
      components[category] ||= {};
      components[category][name] = node;
      references(node);
    }
    Object.values(value).forEach(references);
  }
  references(paths);
  return { ...document, paths, components };
}

for (const kind of ["school", "control"]) {
  const raw = await readFile(`${backend}/api/openapi/${kind}.json`, "utf8");
  const document = browserContract(JSON.parse(raw), kind);
  await output(
    `src/lib/api/generated/${kind}.ts`,
    astToString(await openapiTS(document)),
  );
  manifest[kind] = createHash("sha256").update(raw).digest("hex");
  if (kind === "school")
    await output(
      "src/lib/api/generated/routes.json",
      JSON.stringify(
        Object.entries(document.paths)
          .filter(([path]) => path.startsWith("/api/v1/"))
          .flatMap(([path, item]) =>
            Object.keys(item)
              .filter((m) => ["get", "post", "put"].includes(m))
              .map((method) => ({
                method: method.toUpperCase(),
                path: path.replace("/api/v1/", ""),
              })),
          ),
        null,
        2,
      ) + "\n",
    );
}
await output(
  "src/lib/api/generated/CONTRACTS.json",
  JSON.stringify(manifest, null, 2) + "\n",
);
