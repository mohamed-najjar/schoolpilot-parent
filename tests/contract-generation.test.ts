// @vitest-environment node
import { test, expect } from "vitest";
import { mkdtemp, mkdir, readFile, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { execFileSync } from "node:child_process";

test("contract generation keeps private service paths outside browser routes", async () => {
  const temporary = await mkdtemp(join(tmpdir(), "schoolpilot-contract-"));
  try {
    const source = join(temporary, "backend", "api", "openapi");
    const target = join(temporary, "portal");
    await mkdir(source, { recursive: true });
    await mkdir(target);
    const operation = { responses: { "200": { description: "Success" } } };
    const contract = {
      openapi: "3.1.0",
      info: { title: "Synthetic contract boundary", version: "1" },
      paths: {
        "/api/v1/example": { get: operation, post: operation },
        "/internal/v1/tenant/health": { get: operation },
        "/health/live": { get: operation },
      },
    };
    for (const kind of ["school", "control"]) {
      const value =
        kind === "control"
          ? {
              ...contract,
              components: {
                schemas: {
                  DiscoveredSchool: {
                    type: "object",
                    properties: {
                      metadata: {
                        $ref: "#/components/schemas/DiscoveryMetadata",
                      },
                    },
                  },
                  DiscoveryMetadata: {
                    type: "object",
                    properties: { code: { type: "string" } },
                  },
                  UnusedOperator: {
                    type: "object",
                    properties: { privileged: { type: "string" } },
                  },
                },
              },
              paths: {
                ...contract.paths,
                "/api/v1/schools": {
                  get: {
                    responses: {
                      "200": {
                        description: "Discovered schools",
                        content: {
                          "application/json": {
                            schema: {
                              $ref: "#/components/schemas/DiscoveredSchool",
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            }
          : contract;
      await writeFile(join(source, kind + ".json"), JSON.stringify(value));
    }
    execFileSync(process.execPath, [resolve("scripts/generate-api.mjs")], {
      cwd: target,
      env: { ...process.env, BACKEND_SOURCE: join(temporary, "backend") },
      stdio: "pipe",
    });
    expect(
      JSON.parse(
        await readFile(
          join(target, "src/lib/api/generated/routes.json"),
          "utf8",
        ),
      ),
    ).toEqual([
      { method: "GET", path: "example" },
      { method: "POST", path: "example" },
    ]);
    const control = await readFile(
      join(target, "src/lib/api/generated/control.ts"),
      "utf8",
    );
    expect(control).toContain("DiscoveredSchool");
    expect(control).toContain("DiscoveryMetadata");
    expect(control).not.toContain("UnusedOperator");
    expect(control).not.toContain("/internal/");
    expect(control).not.toContain("/api/v1/example");
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
});
