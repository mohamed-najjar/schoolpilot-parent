import "server-only";
import * as oidc from "openid-client";
import { serverConfig } from "@/config/server";
let discovered: Promise<oidc.Configuration> | undefined;
export async function oidcConfig() {
  if (!discovered) {
    const c = serverConfig();
    discovered = oidc
      .discovery(
        c.issuer,
        c.clientId,
        c.clientSecret,
        c.clientSecret ? oidc.ClientSecretPost(c.clientSecret) : oidc.None(),
        {
          timeout: 5,
          ...(c.issuer.protocol === "http:"
            ? { execute: [oidc.allowInsecureRequests] }
            : {}),
        },
      )
      .then((v) => {
        oidc.enableNonRepudiationChecks(v);
        return v;
      })
      .catch((e) => {
        discovered = undefined;
        throw e;
      });
  }
  return discovered;
}
export { oidc };
