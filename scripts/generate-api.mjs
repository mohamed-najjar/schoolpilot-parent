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
for (const kind of ["school", "control"]) {
  const raw = await readFile(`${backend}/api/openapi/${kind}.json`, "utf8");
  await output(
    `src/lib/api/generated/${kind}.ts`,
    astToString(await openapiTS(JSON.parse(raw))),
  );
  manifest[kind] = createHash("sha256").update(raw).digest("hex");
  if (kind === "school")
    await output(
      "src/lib/api/generated/routes.json",
      JSON.stringify(
        Object.entries(JSON.parse(raw).paths).flatMap(([path, item]) =>
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
