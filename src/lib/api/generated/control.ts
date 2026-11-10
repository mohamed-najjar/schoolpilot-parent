export interface paths {
    "/health/live": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** controlHealthLive */
        get: operations["controlHealthLive"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/health/ready": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** controlHealthReady */
        get: operations["controlHealthReady"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
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
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Problem: {
            code: string;
            message: string;
            details: unknown;
            request_id: string;
        };
        Health: {
            /** @enum {string} */
            status: "ok" | "unavailable";
        };
        PersonInput: {
            first_name: string;
            last_name: string;
            first_name_ar?: string;
            last_name_ar?: string;
            /** Format: date */
            date_of_birth?: string;
            /** @enum {string} */
            preferred_language: "en" | "ar";
        };
        Person: {
            first_name: string;
            last_name: string;
            first_name_ar?: string;
            last_name_ar?: string;
            date_of_birth?: string | null;
            /** @enum {string} */
            preferred_language: "en" | "ar";
            /** Format: uuid */
            id: string;
            /** Format: int32 */
            version: number;
            /** Format: date-time */
            created_at?: string;
        };
        StudentInput: {
            first_name: string;
            last_name: string;
            first_name_ar?: string;
            last_name_ar?: string;
            /** Format: date */
            date_of_birth?: string;
            /** @enum {string} */
            preferred_language: "en" | "ar";
            student_number: string;
        };
        Student: {
            first_name: string;
            last_name: string;
            first_name_ar?: string;
            last_name_ar?: string;
            date_of_birth?: string | null;
            /** @enum {string} */
            preferred_language?: "en" | "ar";
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            person_id: string;
            student_number: string;
            /** Format: int32 */
            version: number;
            /** Format: date-time */
            created_at?: string;
        };
        EnrollmentInput: {
            /** Format: uuid */
            student_id: string;
            /** Format: uuid */
            academic_year_id: string;
            /** Format: uuid */
            program_id: string;
            /** Format: uuid */
            grade_level_id: string;
            /** Format: uuid */
            campus_id: string;
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
        };
        Enrollment: {
            /** Format: uuid */
            student_id: string;
            /** Format: uuid */
            academic_year_id: string;
            /** Format: uuid */
            program_id: string;
            /** Format: uuid */
            grade_level_id: string;
            /** Format: uuid */
            campus_id: string;
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
            /** Format: uuid */
            id: string;
            /** Format: int32 */
            version: number;
            /** @enum {string} */
            status: "pending" | "active" | "withdrawn" | "completed" | "cancelled";
        };
        TransitionInput: {
            /** @enum {string} */
            status: "active" | "withdrawn" | "completed" | "cancelled";
            /** Format: date */
            ends_on?: string;
        } & unknown;
        GuardianInput: {
            /** Format: uuid */
            person_id: string;
        };
        Guardian: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            person_id: string;
        };
        StaffInput: {
            /** Format: uuid */
            person_id: string;
            employee_number: string;
        };
        Staff: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            person_id: string;
            employee_number: string;
            status: string;
            /** Format: int32 */
            version: number;
        };
        RelationshipInput: {
            /** Format: uuid */
            guardian_id: string;
            relationship_code: string;
            can_view_academics?: boolean;
            can_view_finance?: boolean;
            can_report_absence?: boolean;
            can_receive_messages?: boolean;
            restricted?: boolean;
            /** Format: date */
            valid_from: string;
            /** Format: date */
            valid_until?: string;
        };
        Relationship: {
            /** Format: uuid */
            guardian_id: string;
            relationship_code?: string;
            can_view_academics?: boolean;
            can_view_finance?: boolean;
            can_report_absence?: boolean;
            can_receive_messages?: boolean;
            restricted: boolean;
            /** Format: date */
            valid_from: string;
            valid_until?: string | null;
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            student_id: string;
        };
        School: {
            /** Format: uuid */
            id: string;
            name_en: string;
            name_ar: string;
            emirate: string;
            /** @constant */
            timezone: "Asia/Dubai";
            /** Format: int32 */
            version: number;
        };
        Me: {
            /** Format: uuid */
            person_id: string;
        };
        SectionPlacementInput: {
            /** Format: uuid */
            section_id: string;
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
        };
        CoursePlacementInput: {
            /** Format: uuid */
            course_id: string;
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
        };
        SectionPlacement: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            enrollment_id: string;
            /** Format: uuid */
            academic_year_id?: string;
            /** Format: uuid */
            grade_level_id?: string;
            /** Format: uuid */
            program_id?: string;
            /** Format: uuid */
            campus_id?: string;
            /** Format: uuid */
            section_id: string;
            /** Format: date */
            valid_from: string;
            /** Format: date */
            valid_until: string;
            /** Format: int32 */
            version: number;
            /** @enum {string} */
            status: "active" | "cancelled";
            cancelled_at: string | null;
        };
        CoursePlacement: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            enrollment_id: string;
            /** Format: uuid */
            academic_year_id?: string;
            /** Format: uuid */
            program_id?: string;
            /** Format: uuid */
            campus_id?: string;
            /** Format: uuid */
            course_offering_id: string;
            /** Format: date */
            joined_on: string;
            /** Format: date */
            left_on: string;
            /** Format: int32 */
            version: number;
            /** @enum {string} */
            status: "active" | "cancelled";
            cancelled_at: string | null;
        };
        CampusInput: {
            code: string;
            name_en: string;
            name_ar?: string;
        };
        Campus: {
            code: string;
            name_en: string;
            name_ar: string;
            active: boolean;
            /** Format: uuid */
            id: string;
            /** Format: int32 */
            version: number;
        };
        YearInput: {
            code: string;
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
        };
        Year: {
            code: string;
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
            status: string;
            /** Format: uuid */
            id: string;
            /** Format: int32 */
            version: number;
        };
        TermInput: {
            /** Format: uuid */
            academic_year_id: string;
            code: string;
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
        };
        Term: {
            /** Format: uuid */
            academic_year_id: string;
            code: string;
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
            /** Format: uuid */
            id: string;
        };
        CurriculumInput: {
            code: string;
            name_en: string;
            name_ar?: string;
        };
        Curriculum: {
            code: string;
            name_en: string;
            name_ar: string;
            version: string;
            /** Format: uuid */
            id: string;
        };
        ProgramInput: {
            code: string;
            name_en: string;
            name_ar?: string;
            /** Format: uuid */
            curriculum_id: string;
        };
        Program: {
            code: string;
            name_en: string;
            name_ar: string;
            /** Format: uuid */
            curriculum_id: string;
            /** Format: uuid */
            id: string;
        };
        GradeInput: {
            code: string;
            name_en: string;
            name_ar?: string;
            /** Format: uuid */
            program_id: string;
            /** Format: int32 */
            sort_order: number;
        };
        Grade: {
            code: string;
            name_en: string;
            name_ar: string;
            /** Format: uuid */
            program_id: string;
            /** Format: int32 */
            sort_order: number;
            /** Format: uuid */
            id: string;
        };
        SubjectInput: {
            code: string;
            name_en: string;
            name_ar?: string;
            /** Format: uuid */
            program_id: string;
        };
        Subject: {
            code: string;
            name_en: string;
            name_ar: string;
            /** Format: uuid */
            program_id: string;
            /** Format: uuid */
            id: string;
        };
        SectionInput: {
            /** Format: uuid */
            academic_year_id: string;
            /** Format: uuid */
            program_id: string;
            /** Format: uuid */
            grade_level_id: string;
            /** Format: uuid */
            campus_id: string;
            code: string;
            capacity?: number;
        };
        Section: {
            /** Format: uuid */
            academic_year_id: string;
            /** Format: uuid */
            program_id: string;
            /** Format: uuid */
            grade_level_id: string;
            /** Format: uuid */
            campus_id: string;
            code: string;
            capacity: number | null;
            /** Format: uuid */
            id: string;
        };
        CourseInput: {
            /** Format: uuid */
            academic_year_id: string;
            /** Format: uuid */
            program_id: string;
            /** Format: uuid */
            subject_id: string;
            /** Format: uuid */
            campus_id: string;
            code: string;
        };
        Course: {
            /** Format: uuid */
            academic_year_id: string;
            /** Format: uuid */
            program_id: string;
            /** Format: uuid */
            subject_id: string;
            /** Format: uuid */
            campus_id: string;
            code: string;
            /** Format: uuid */
            id: string;
        };
        TeachingAssignmentInput: {
            /** Format: uuid */
            staff_id: string;
            /** Format: uuid */
            course_offering_id: string;
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
        };
        TeachingAssignment: {
            /** Format: uuid */
            staff_id: string;
            /** Format: uuid */
            course_offering_id: string;
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
            /** Format: uuid */
            id: string;
        };
        DiscoveredSchool: {
            /** Format: uuid */
            id: string;
            code: string;
            name_en: string;
            name_ar: string;
            /** Format: uri */
            endpoint_url: string;
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
    controlHealthLive: {
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
                    "application/json": components["schemas"]["Health"];
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
    controlHealthReady: {
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
                    "application/json": components["schemas"]["Health"];
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
            /** @description Database unavailable */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Health"];
                };
            };
        };
    };
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
}
