export interface paths {
    "/api/v1/schools": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** All active deployments for current issuer/subject with active effective membership. Multiple independent school memberships per immutable issuer/subject; no role or resource permission is implied. */
        get: operations["discoverSchools"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/onboarding/identity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Verified central issuer and immutable subject before any school membership. Creates no account, role or membership. */
        get: operations["onboardingIdentity"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/onboarding/resolve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Verified exact recipient only. Checks the hash, expiry, revocation and registered active deployment. No role claims, email matching or browser-supplied endpoint. No-store response. */
        post: operations["resolveIdentityInvitation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        DiscoveredSchool: {
            /** Format: uuid */
            id: string;
            code: string;
            name_en: string;
            name_ar: string;
            /** Format: uri */
            endpoint_url: string;
        };
        Problem: {
            code: string;
            message: string;
            details: unknown;
            request_id: string;
        };
        OnboardingIdentity: {
            issuer: string;
            subject: string;
        };
        InvitationDestination: {
            /** Format: uuid */
            invitation_id: string;
            /** Format: uuid */
            school_id: string;
            /** @enum {string} */
            kind: "first_admin" | "staff" | "teacher" | "guardian" | "student";
            school_code: string;
            name_en: string;
            name_ar: string;
            /** Format: uri */
            endpoint_url: string;
            /** @enum {string} */
            state: "pending" | "accepted" | "expired" | "revoked" | "failed";
            /** Format: date-time */
            expires_at: string;
            activated_at: string | null;
        };
        OnboardingToken: {
            /** @description One-time secret. Request body or fragment handoff only; never query, logs or persistent client storage. */
            token: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    discoverSchools: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: components["schemas"]["DiscoveredSchool"][];
                    };
                };
            };
            /** @description Request rejected */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            412: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            428: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            429: {
                headers: {
                    /** @description Seconds until this rate-limit window resets. */
                    "Retry-After"?: number;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
        };
    };
    onboardingIdentity: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OnboardingIdentity"];
                };
            };
            /** @description Request rejected */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            412: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            428: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            429: {
                headers: {
                    /** @description Seconds until this rate-limit window resets. */
                    "Retry-After"?: number;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
        };
    };
    resolveIdentityInvitation: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["OnboardingToken"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InvitationDestination"];
                };
            };
            /** @description Request rejected */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            412: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            428: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            429: {
                headers: {
                    /** @description Seconds until this rate-limit window resets. */
                    "Retry-After"?: number;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
            /** @description Request rejected */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Problem"];
                };
            };
        };
    };
}
