export interface paths {
    "/health/live": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** healthLive */
        get: operations["healthLive"];
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
        /** healthReady */
        get: operations["healthReady"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * currentIdentity
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["currentIdentity"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/school": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * getSchool
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["getSchool"];
        /**
         * updateSchool
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        put: operations["updateSchool"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/campuses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Campus; bounded to 200 records, school administrator scope
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listCampus"];
        put?: never;
        /**
         * Create Campus; requires school-scoped principal or administrator
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createCampus"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/academic-years": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Year; bounded to 200 records, school administrator scope
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listYear"];
        put?: never;
        /**
         * Create Year; requires school-scoped principal or administrator
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createYear"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/terms": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listTerms
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listTerms"];
        put?: never;
        /**
         * Create Term; requires school-scoped principal or administrator
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createTerm"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/curricula": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Curriculum; bounded to 200 records, school administrator scope
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listCurriculum"];
        put?: never;
        /**
         * Create Curriculum; requires school-scoped principal or administrator
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createCurriculum"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/programs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Program; bounded to 200 records, school administrator scope
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listProgram"];
        put?: never;
        /**
         * Create Program; requires school-scoped principal or administrator
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createProgram"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/grade-levels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Grade; bounded to 200 records, school administrator scope
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listGrade"];
        put?: never;
        /**
         * Create Grade; requires school-scoped principal or administrator
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createGrade"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/subjects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Subject; bounded to 200 records, school administrator scope
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listSubject"];
        put?: never;
        /**
         * Create Subject; requires school-scoped principal or administrator
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createSubject"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/sections": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Section; bounded to 200 records, school administrator scope
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listSection"];
        put?: never;
        /**
         * Create Section; requires school-scoped principal or administrator
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createSection"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/courses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Course; bounded to 200 records, school administrator scope
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listCourse"];
        put?: never;
        /**
         * Create Course; requires school-scoped principal or administrator
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createCourse"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/teaching-assignments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listTeachingAssignments
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listTeachingAssignments"];
        put?: never;
        /**
         * Create TeachingAssignment; requires school-scoped principal or administrator
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createTeachingAssignment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/persons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * createPerson
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createPerson"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/students": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Cursor-paginated students; requires school-scoped principal or administrator
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listStudents"];
        put?: never;
        /**
         * createStudent
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createStudent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/students/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Read student with current school/campus admin, teacher assignment, self or guardian relationship permission
         * @description Teacher-only readers receive roster identity/names only, with no personal identifiers, DOB, language, timestamps or version/ETag. Self, authorized guardian and school/campus administrators retain personal-record permission. Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["getStudent"];
        /**
         * Replace student personal details; requires school administrator; student number immutable
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        put: operations["updateStudent"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/guardians": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * createGuardian
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createGuardian"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/staff": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listStaff
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listStaff"];
        put?: never;
        /**
         * createStaff
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createStaff"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/students/{id}/guardians": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * linkGuardian
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["linkGuardian"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/students/{id}/guardians/{relationshipID}/restrict": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Immediately restrict guardian access; requires school administrator
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["restrictGuardian"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/enrollments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create pending episode; school/campus administrator. Same actor/key/payload replays current resource; different payload returns 409.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createEnrollment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/students/{id}/enrollments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listStudentEnrollments
         * @description Self, academic guardian and school administrator may read history. Campus administrators are filtered per campus. Teachers receive only current effective episodes with an active matching course enrollment, assignment and grant. Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listStudentEnrollments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/enrollments/{id}/transitions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * pending → active/cancelled; active → withdrawn/completed; terminal states immutable
         * @description Withdrawal requires explicit inclusive ends_on; completion defaults to planned end. Atomically closes placements, cancelling future reservations without deleting history. Pending cancellation voids placements. If-Match is episode version. Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["transitionEnrollment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/enrollments/{id}/sections": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * createSectionPlacement
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createSectionPlacement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/enrollments/{id}/courses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * createCoursePlacement
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createCoursePlacement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/calendar-settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * getCalendarSettings
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["getCalendarSettings"];
        /**
         * updateCalendarSettings
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        put: operations["updateCalendarSettings"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/calendar-exceptions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listCalendarExceptions
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listCalendarExceptions"];
        put?: never;
        /**
         * createCalendarException
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createCalendarException"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/grading-schemes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listGradingSchemes
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listGradingSchemes"];
        put?: never;
        /**
         * createGradingScheme
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createGradingScheme"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/grading-schemes/{id}/bands": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listGradeBands
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listGradeBands"];
        put?: never;
        /**
         * Create numeric [min,max) band or nonnumeric label. Numeric bands must not overlap.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createGradeBand"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/grade-scheme-assignments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * assignGradeScheme
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["assignGradeScheme"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/identity-links": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * School administrator links a verified-issuer subject to a local person. Existing links cannot be reassigned.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["linkLocalIdentity"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/role-grants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Read own grants or school administrator reads another person grants. At most 200.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listRoleGrants"];
        put?: never;
        /**
         * School administrator grants a typed effective scope; course scope is limited to teachers.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createRoleGrant"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/role-grants/{id}/revoke": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Audited immediate revocation. Cannot revoke the last active school-wide administrator/principal grant; repeated revocation is a no-op.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["revokeRoleGrant"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/grants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listMyRoleGrants
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listMyRoleGrants"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/persons/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Read own person or school administrator reads another person
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["getPerson"];
        /**
         * updatePerson
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        put: operations["updatePerson"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/staff/{id}/transitions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * School administrator activates/deactivates staff. Inactive staff lose teacher resource access; history remains.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["transitionStaff"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/academic-years/{id}/transitions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * draft → active → closed. Pending/active enrollment episodes prevent closing. Closed years reject new active/pending enrollments.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["transitionAcademicYear"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/enrollments/{id}/sections/{placementID}/close": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * School/campus administrator. If-Match is placement version. Shorten inclusive end; an end before placement start cancels the future reservation and preserves its original dates. Cannot extend, resurrect or edit identity.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["closeSectionPlacement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/enrollments/{id}/courses/{placementID}/close": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * School/campus administrator. If-Match is placement version. Shorten inclusive end; an end before placement start cancels the future reservation and preserves its original dates. Cannot extend, resurrect or edit identity.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["closeCoursePlacement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/campuses/{id}/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * School administrator. Serializes with new enrollment, activation and placement intake. Inactive campuses retain history and permit closing existing episodes.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        put: operations["setCampusStatus"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/enrollments/{id}/transfers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Atomic same-school transfer: close active source and placements; destination starts next day, same student, valid active campus. Optional target section/courses placed in same transaction. Requires source and target campus management permissions. Replay returns current source/destination; If-Match is original source version and participates in payload hash.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["transferEnrollment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/timetable/rooms": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listTimetableRoom
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listTimetableRoom"];
        put?: never;
        /**
         * Campus administrator creates immutable timetable configuration.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createTimetableRoom"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/timetable/periods": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listTimetablePeriod
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listTimetablePeriod"];
        put?: never;
        /**
         * Campus administrator creates immutable timetable configuration.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createTimetablePeriod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/timetable/rules": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listTimetableRule
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listTimetableRule"];
        put?: never;
        /**
         * Campus administrator creates immutable timetable configuration.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createTimetableRule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/timetable/rules/{id}/generate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Calendar/term aware, at most 94 inclusive dates; atomic resource exclusions; repeated generation creates zero duplicates.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["generateLessons"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/timetable/rules/{id}/retire": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Stop future generation; preserve existing occurrences.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["retireTimetableRule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/lessons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Chronological starts_at/UUID cursor order. Defaults to today in Dubai; at most 94 dates. Teachers see responsible lessons, guardians current children, administrators their campuses.
         * @description Optional student_id requires current resource authorization and filters the exact enrollment/course/class episode BEFORE chronological pagination. Useful for separate child calendars when one guardian has multiple children. Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listLessons"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/lessons/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Administrator substitutes/reschedules/cancels on current/future dates before roster opening (rescheduling requires future instants); old revision retained; exclusions serialize conflicts.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        put: operations["changeLesson"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/attendance/daily-teachers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * assignDailyAttendanceTeacher
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["assignDailyAttendanceTeacher"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/attendance-sessions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listAttendanceSessions
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listAttendanceSessions"];
        put?: never;
        /**
         * Only assigned teacher/substitute; today through preceding seven Dubai dates. Freeze eligible roster; separate day/lesson uniqueness. Same key safely replays.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["openAttendanceSession"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/attendance-sessions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * getAttendanceSession
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["getAttendanceSession"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/attendance-sessions/{id}/submit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Teacher submits a fully marked roster; administrator approves submitted session.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["submitAttendanceSession"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/attendance-sessions/{id}/approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Teacher submits a fully marked roster; administrator approves submitted session.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["approveAttendanceSession"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/attendance-records/{id}/mark": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Mark: responsible teacher, open session. Correct: campus administrator, submitted/approved session, nonblank reason. Append immutable history.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        put: operations["markAttendanceRecord"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/attendance-records/{id}/correct": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Mark: responsible teacher, open session. Correct: campus administrator, submitted/approved session, nonblank reason. Append immutable history.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        put: operations["correctAttendanceRecord"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/attendance-records/{id}/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * getAttendanceHistory
         * @description Guardian/student projection omits internal staff notes and workflow actor IDs. History includes only this guardian's own absence explanations; staff retains authorized full history. Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["getAttendanceHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/students/{id}/attendance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Self/academic guardian or actual class teacher/campus administrator; at most 371 dates. Day and lesson rows remain distinct.
         * @description Guardian/student projection omits internal staff notes and workflow actor IDs. History includes only this guardian's own absence explanations; staff retains authorized full history. Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listStudentAttendance"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/absence-reports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listAbsenceReports
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listAbsenceReports"];
        put?: never;
        /**
         * Current unrestricted guardian with can_report_absence; up to 31 inclusive dates. Advance report does not manufacture attendance.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["reportAbsence"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/absence-reports/{id}/review": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * School administrator approves/rejects; submitting guardian may cancel pending report. Approval preserves teacher status; explicit correction applies any change.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["reviewAbsenceReport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/attendance-records/{id}/correction-requests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * requestAttendanceCorrection
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["requestAttendanceCorrection"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/attendance-corrections/{id}/review": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * decideAttendanceCorrection
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["decideAttendanceCorrection"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/reports/attendance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Administrator, campus-scoped when class supplied; submitted/approved rows only; day and lesson totals never mixed.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["attendanceStatistics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/announcements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listAnnouncements
         * @description Optional student_id filters before pagination; existing current recipient/party visibility remains required. Announcement child filtering additionally requires the current guardian messaging relationship. Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listAnnouncements"];
        put?: never;
        /**
         * School administrator publishes school notices; currently assigned class teachers may author and publish their own class notices. Substitutions grant lesson permissions only.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createAnnouncement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/announcements/{id}/publish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * publishAnnouncement
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["publishAnnouncement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/announcements/{id}/archive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * archiveAnnouncement
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["archiveAnnouncement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/conversations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listConversations
         * @description Optional student_id filters before pagination; existing current recipient/party visibility remains required. Announcement child filtering additionally requires the current guardian messaging relationship. Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listConversations"];
        put?: never;
        /**
         * Actual current class teacher and unrestricted messaging guardian; both parties rechecked on subsequent access.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createConversation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/conversations/{id}/close": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * closeConversation
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["closeConversation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/conversations/{id}/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Chronological created_at/UUID order. Cursor is the last message UUID in this conversation, never a raw timestamp supplied by the caller.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listMessages"];
        put?: never;
        /**
         * sendMessage
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["sendMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/conversations/{id}/attachments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Conversation participant; maximum 32 KiB decoded plain UTF-8 text or validated PNG/JPEG (one million pixels). No HTML/SVG/PDF. No production malware-scanning claim.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["uploadMessageAttachment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/message-attachments/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Scoped participant; recipient may download only after attachment is sent. JSON base64 prevents inline execution.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["downloadMessageAttachment"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/notification-preferences": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * getNotificationPreferences
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["getNotificationPreferences"];
        /**
         * setNotificationPreferences
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        put: operations["setNotificationPreferences"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/notification-templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listNotificationTemplates
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listNotificationTemplates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/notification-templates/{code}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * updateNotificationTemplate
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        put: operations["updateNotificationTemplate"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/notifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listNotifications
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listNotifications"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/notifications/{id}/read": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * readNotification
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["readNotification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/notification-deliveries": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * School administrator; queued/processing/processed/delivered/failed/suppressed. Processed is provider acceptance, delivered is explicit channel confirmation; local outbox journal is neither. delivery_kind explicitly labels in_app, synthetic_provider, provider_confirmed or unconfirmed; a synthetic provider confirmation never claims external email.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listNotificationDeliveries"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/attendance-corrections": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listAttendanceCorrections
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listAttendanceCorrections"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/lessons/{id}/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * getLessonHistory
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["getLessonHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/notification-deliveries/{id}/attempts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listDeliveryAttempts
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listDeliveryAttempts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/children": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Discover only current unrestricted children with explicit academic/report/message rights; minimal roster identity, no DOB or contact data.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listAuthorizedChildren"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/student": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Discover the student profile mapped to the verified local person; no arbitrary person selector.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["getSelfStudent"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/learning-courses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * learningCourses
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["learningCourses"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/learning-content": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listLearningContent
         * @description Optional section_id filters before cursor pagination, retaining course-wide records. Student-targeted assignments match current enrolled class targets. Existing resource authorization is unchanged. Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listLearningContent"];
        put?: never;
        /**
         * createLearningContent
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createLearningContent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/learning-content/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * getLearningContent
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["getLearningContent"];
        /**
         * editLearningContent
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        put: operations["editLearningContent"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/learning-content/{id}/publish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * publishLearningContent
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["publishLearningContent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/learning-content/{id}/archive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * archiveLearningContent
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["archiveLearningContent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/assignments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listAssignments
         * @description Optional section_id filters before cursor pagination, retaining course-wide records. Student-targeted assignments match current enrolled class targets. Existing resource authorization is unchanged. Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listAssignments"];
        put?: never;
        /**
         * createAssignment
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createAssignment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/assignments/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * getAssignment
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["getAssignment"];
        /**
         * editAssignment
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        put: operations["editAssignment"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/assignments/{id}/transition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Draft -> scheduled/published/archived; scheduled -> draft/archived or automated publication; published -> closed/archived; closed -> archived. Publishing freezes eligible students and queues generic notifications atomically.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["transitionAssignment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/assignments/{id}/recipients": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listAssignmentRecipients
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listAssignmentRecipients"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/assignments/{id}/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * assignmentHistory
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["assignmentHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/assignments/{id}/files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Private object storage; 8 MiB decoded limit. Teacher attaches draft materials; students upload only their own submission files. UTF-8 text/PNG/JPEG allowlist, no antivirus claim.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["assignmentsUploadFile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/learning-content/{id}/files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Private object storage; 8 MiB decoded limit. Teacher attaches draft materials; students upload only their own submission files. UTF-8 text/PNG/JPEG allowlist, no antivirus claim.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["learningcontentUploadFile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/learning-files/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Rechecks current resource rights, submitted-file linkage and SHA-256. Unsubmitted files are uploader-only. Storage keys are never exposed.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["downloadLearningFile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/students/{id}/assignments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Authorized child/self calendar; both dates together, at most 371 days; current enrollment required. Published snapshots only; guardian progress respects assignment policy.
         * @description Optional course_id/progress filters apply before pagination. Progress filtering cannot disclose withheld guardian progress; those rows are excluded when a progress filter is used. Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["childAssignments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/students/{id}/assignment-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * childAssignmentSummary
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["childAssignmentSummary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/assignments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Authorized child/self calendar; both dates together, at most 371 days; current enrollment required. Published snapshots only; guardian progress respects assignment policy.
         * @description Optional course_id/progress filters apply before pagination. Progress filtering cannot disclose withheld guardian progress; those rows are excluded when a progress filter is used. Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["selfAssignments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/assignment-summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * selfAssignmentSummary
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["selfAssignmentSummary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/assignment-recipients/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * getAssignmentRecipient
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["getAssignmentRecipient"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/assignment-recipients/{id}/submissions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Chronological immutable versions. Teachers/guardians never see drafts; guardian progress policy applies.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listLearningSubmissions"];
        put?: never;
        /**
         * Student self only; immutable draft/final versions. Final submit enforces database-time deadlines, late policy, explicit return-for-revision and optimistic version. Duplicate keys serialize and replay.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["saveLearningSubmission"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/assignment-recipients/{id}/feedback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listLearningFeedback
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listLearningFeedback"];
        put?: never;
        /**
         * Current course teacher/admin; feedback targets latest submitted version. Return requires a future revision deadline. Private notes are teacher-only.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createLearningFeedback"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/assignment-recipients/{id}/accommodation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Current teacher/admin; versioned reasoned extension and explicit late policy; original assignment deadline retained.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        put: operations["extendAssignmentDeadline"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/grading-policies": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listGradingPolicies
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listGradingPolicies"];
        put?: never;
        /**
         * Immutable sealed policy versions; supersedes_id creates the next revision. Exact decimal strings, normalized categories/bands/criteria. School administrator only.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createGradingPolicy"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/grading-policies/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * getGradingPolicy
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["getGradingPolicy"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/reporting-periods": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listReportingPeriods
         * @description Administrators retain existing authority. Teachers may discover configured periods in academic years where a current course/class teaching-management grant applies, including before the first assessment exists. Unrelated years, students/guardians and revoked teacher grants cannot discover those periods. No publication or moderation authority is granted. Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listReportingPeriods"];
        put?: never;
        /**
         * createReportingPeriod
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createReportingPeriod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/reporting-periods/{id}/transition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * transitionReportingPeriod
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["transitionReportingPeriod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/assessments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listAssessments
         * @description Optional section_id filters before cursor pagination, retaining course-wide records. Student-targeted assignments match current enrolled class targets. Existing resource authorization is unchanged. Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listAssessments"];
        put?: never;
        /**
         * createAssessment
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createAssessment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/assessments/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * getAssessment
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["getAssessment"];
        /**
         * editAssessment
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        put: operations["editAssessment"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/assessments/{id}/publish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Freezes an enrollment-backed roster. Assignment assessments reuse exact Phase 4 audience and submitted versions.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["publishAssessment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/assessments/{id}/grades": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listAssessmentGrades
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listAssessmentGrades"];
        put?: never;
        /**
         * Atomic batch of 1–100 student marks. Any invalid row rolls back the batch. Response identifies the assessment; GET grades retrieves persisted revisions. Idempotency replay has no duplicate effects.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["bulkCreateGrades"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/grades/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * editDraftGrade
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        put: operations["editDraftGrade"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/grades/{id}/transition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * transitionGrade
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["transitionGrade"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/grades/{id}/amendments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Creates a reasoned draft revision. Administrative review/approval is required before publishing an amendment. Original publication is immutable.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["amendPublishedGrade"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/grades/{id}/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * gradeHistory
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["gradeHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/gradebook": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * teacherGradebook
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["teacherGradebook"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/reports/academic": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * academicSummary
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["academicSummary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/students/{id}/academic-grades": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Published grade revisions only; current placement and academic relationship rights. Report snapshots remain separately available after enrollment closure.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["studentPublishedGradeHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/students/{id}/academic-progress": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Current self/guardian enrollment, or current staff scope. Portal contains only published grades and never internal notes. Incomplete results have no authoritative overall score.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["studentAcademicProgress"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/students/{id}/report-cards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Published historical snapshots; current explicit guardian academic rights remain required after transfer or enrollment closure.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["studentReportCards"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/academic-grades": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Published grade revisions only; current placement and academic relationship rights. Report snapshots remain separately available after enrollment closure.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["selfPublishedGradeHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/academic-progress": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Current self/guardian enrollment, or current staff scope. Portal contains only published grades and never internal notes. Incomplete results have no authoritative overall score.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["selfAcademicProgress"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/me/report-cards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Published historical snapshots; current explicit guardian academic rights remain required after transfer or enrollment closure.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["selfReportCards"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/progress-comments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listProgressComments
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listProgressComments"];
        put?: never;
        /**
         * createProgressComment
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createProgressComment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/progress-comments/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * editProgressComment
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        put: operations["editProgressComment"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/report-definitions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listReportDefinitions
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listReportDefinitions"];
        put?: never;
        /**
         * createReportDefinition
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createReportDefinition"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/report-cards": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * listReportCards
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["listReportCards"];
        put?: never;
        /**
         * createReportCard
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["createReportCard"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/report-cards/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * getReportCard
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["getReportCard"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/report-cards/{id}/transition": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Draft -> review -> administrator approved -> published. Approval rebuilds the snapshot from current published source revisions. Publication rejects changed sources. Return removes approval; amendments create a new reasoned report revision.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        post: operations["transitionReportCard"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/report-cards/{id}/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * reportCardHistory
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["reportCardHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/management/overview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Current school-wide principal or school administrator only. School deployment bound; no user-selected database.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["managementOverview"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/management/students": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Current school-wide principal or school administrator only. School deployment bound; no user-selected database.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["managementStudents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/management/students/{id}/context": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Current school-wide principal or school administrator only. School deployment bound; no user-selected database.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["managementStudentContext"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/management/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Current school-wide principal or school administrator only. School deployment bound; no user-selected database.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["managementSearch"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/management/students/{id}/assignments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Current school-wide administrator/principal only; existing learning recipient and enrollment rules retained. No private submission drafts.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["managementStudentAssignments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/learning-courses/{id}/classes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Current effective teaching grant and assignment required per class/course; administrators retain existing management authority. Roster is current-episode-only, minimized and audited. No guardian, DOB, health or personal administrative fields. Literal bilingual search and UUID pagination. Revocation applies on every request.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["teachingClasses"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/learning-courses/{id}/roster": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Current effective teaching grant and assignment required per class/course; administrators retain existing management authority. Roster is current-episode-only, minimized and audited. No guardian, DOB, health or personal administrative fields. Literal bilingual search and UUID pagination. Revocation applies on every request.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["teachingRoster"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/communication-contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Teacher-owned eligible relationship handles only, using the same current messaging eligibility as conversation creation/sending. No guardian name/contact/identity or personal fields. Audited when contacts returned. Restrictions/revocations apply on every request.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["teacherCommunicationContacts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/assessments/{id}/roster": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Current assessment teaching/management scope required. Minimal frozen published audience; current_eligible checks the exact original enrollment episode and current course/class placements. Withdrawal preserves names and historical roster but disables ordinary grade entry. No personal administrative fields. Audited and cursor paginated.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["assessmentRoster"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/guardian/children": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Current effective unrestricted guardian relationship required; each capability remains independently enforced. Teacher/admin roles cannot rescue guardian access. No staff notes, contacts of other guardians or draft grades. Audited transaction; no cross-school database selection. One bounded query per school page; each preview contains at most three records. Explicit lesson total and links to paginated domain details; no per-child HTTP fan-out. Literal bilingual search.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["guardianFamilyChildren"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/guardian/children/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Current effective unrestricted guardian relationship required; each capability remains independently enforced. Teacher/admin roles cannot rescue guardian access. No staff notes, contacts of other guardians or draft grades. Audited transaction; no cross-school database selection. Current class/course context and only periods with visible published grades/reports. Context course/period arrays are complete, without a hidden cap. No authoritative calculation in this read model.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["guardianChildContext"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/guardian/profile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Own guardian display identity only. No edit endpoint, DOB, contact list or other guardian details.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["guardianProfileView"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/guardian/children/{id}/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Current effective unrestricted guardian relationship required; each capability remains independently enforced. Teacher/admin roles cannot rescue guardian access. No staff notes, contacts of other guardians or draft grades. Audited transaction; no cross-school database selection. Current teaching assignments and actual scoped teacher grant required BEFORE pagination. Teacher names and opaque conversation handles only; no staff contacts. Conversation creation/sending rechecks current eligibility.
         * @description Optional workspace narrows the current actor to that capability without changing stored roles or relationships. Teacher workspace requires a current teacher grant and active staff profile; current resource assignments still apply. Omission retains combined API compatibility. Portals pin their workspace server-side.
         */
        get: operations["guardianTeacherContacts"];
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
        CalendarSettingsInput: {
            weekend_days: number[];
        };
        CalendarSettings: {
            /** Format: uuid */
            school_id: string;
            weekend_days: number[];
            /** Format: int32 */
            version: number;
        };
        CalendarExceptionInput: {
            /** Format: uuid */
            academic_year_id: string;
            /** Format: uuid */
            campus_id?: string;
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
            /** @enum {string} */
            kind: "holiday" | "closure" | "teaching_day";
            name_en: string;
            name_ar?: string;
        };
        SchemeInput: {
            /** Format: uuid */
            program_id: string;
            code: string;
            name_en: string;
            name_ar?: string;
            /** @enum {string} */
            scale_type: "numeric" | "letter" | "rubric" | "descriptive";
            /** Format: date */
            effective_from: string;
            /** Format: date */
            effective_until?: string;
        };
        BandInput: {
            code: string;
            label_en: string;
            label_ar?: string;
            min_value?: number;
            max_value?: number;
        };
        GradeSchemeAssignment: {
            /** Format: uuid */
            program_id: string;
            /** Format: uuid */
            grade_level_id: string;
            /** Format: uuid */
            scheme_id: string;
        };
        CalendarException: {
            /** Format: uuid */
            academic_year_id: string;
            campus_id: string | null;
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
            /** @enum {string} */
            kind: "holiday" | "closure" | "teaching_day";
            name_en: string;
            name_ar: string;
            /** Format: uuid */
            id: string;
        };
        GradingScheme: {
            /** Format: uuid */
            program_id: string;
            code: string;
            name_en: string;
            name_ar: string;
            /** @enum {string} */
            scale_type: "numeric" | "letter" | "rubric" | "descriptive";
            /** Format: date */
            effective_from: string;
            effective_until: string | null;
            /** Format: uuid */
            id: string;
        };
        GradeBand: {
            code: string;
            label_en: string;
            label_ar: string;
            min_value: number | null;
            max_value: number | null;
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            scheme_id: string;
            scale_type: string;
        };
        IdentityLinkInput: {
            /** Format: uuid */
            person_id: string;
            subject: string;
        };
        IdentityLink: {
            /** Format: uuid */
            person_id: string;
            issuer: string;
            subject: string;
            /** Format: date-time */
            linked_at: string;
        };
        RoleGrantInput: {
            /** Format: uuid */
            person_id: string;
            /** @enum {string} */
            role_code: "principal" | "school_admin" | "teacher" | "accountant" | "admissions_officer" | "support_officer" | "it_admin";
            /** @enum {string} */
            scope_type: "school" | "campus" | "course";
            /** Format: uuid */
            scope_id: string;
            /** Format: date-time */
            valid_from?: string;
            /** Format: date-time */
            valid_until?: string;
        };
        RoleGrant: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            person_id: string;
            role_code: string;
            school_id: string | null;
            campus_id: string | null;
            section_id: string | null;
            course_id: string | null;
            /** Format: date-time */
            valid_from: string;
            valid_until: string | null;
            revoked_at: string | null;
        };
        SchoolUpdateInput: {
            name_en: string;
            name_ar: string;
        };
        YearTransitionInput: {
            /** @enum {string} */
            status: "active" | "closed";
        };
        StaffTransitionInput: {
            /** @enum {string} */
            status: "active" | "inactive";
        };
        TeacherStudent: {
            /** Format: uuid */
            id: string;
            student_number: string;
            first_name: string;
            last_name: string;
            first_name_ar: string;
            last_name_ar: string;
        };
        PlacementClosureInput: {
            /** Format: date */
            ends_on: string;
        };
        CampusStatusInput: {
            active: boolean;
        };
        TransferInput: {
            /** Format: date */
            ends_on: string;
            destination: components["schemas"]["EnrollmentInput"];
            /** Format: uuid */
            section_id?: string;
            course_ids?: string[];
        };
        TransferResult: {
            source: components["schemas"]["Enrollment"];
            destination: components["schemas"]["Enrollment"];
        };
        RoomInput: {
            /** Format: uuid */
            campus_id: string;
            code: string;
            name_en: string;
            name_ar?: string;
            capacity: number;
        };
        Room: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            campus_id: string;
            code: string;
            name_en: string;
            name_ar: string;
            capacity: number;
            active: boolean;
        };
        PeriodInput: {
            /** Format: uuid */
            campus_id: string;
            code: string;
            starts_at: string;
            ends_at: string;
        };
        Period: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            campus_id: string;
            code: string;
            starts_at: string;
            ends_at: string;
        };
        RuleInput: {
            /** Format: uuid */
            section_id: string;
            /** Format: uuid */
            course_id: string;
            /** Format: uuid */
            staff_id: string;
            /** Format: uuid */
            period_id: string;
            /** Format: uuid */
            room_id: string;
            weekday: number;
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
        };
        Rule: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            section_id: string;
            /** Format: uuid */
            course_id: string;
            /** Format: uuid */
            staff_id: string;
            /** Format: uuid */
            period_id: string;
            /** Format: uuid */
            room_id: string;
            weekday: number;
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
            version: number;
            /** Format: uuid */
            academic_year_id: string;
            /** Format: uuid */
            program_id: string;
            /** Format: uuid */
            campus_id: string;
            retired_at: string | null;
            /** Format: date-time */
            created_at: string;
        };
        GenerateInput: {
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
        };
        GeneratedLessons: {
            /** Format: uuid */
            id: string;
            created: number;
        };
        Lesson: {
            /** Format: uuid */
            id: string;
            version: number;
            /** Format: uuid */
            rule_id: string;
            /** Format: uuid */
            section_id: string;
            /** Format: uuid */
            course_id: string;
            /** Format: uuid */
            campus_id: string;
            /** Format: date */
            local_date: string;
            /** Format: date-time */
            starts_at: string;
            /** Format: date-time */
            ends_at: string;
            /** Format: uuid */
            room_id: string;
            /** Format: uuid */
            staff_id: string;
            /** @enum {string} */
            status: "scheduled" | "completed" | "cancelled";
            reason: string;
            /** Format: date-time */
            created_at: string;
            subject_name_en?: string;
            subject_name_ar?: string;
            staff_name_en?: string;
            staff_name_ar?: string;
            room_code?: string;
            section_code?: string;
        };
        LessonChange: {
            /** Format: uuid */
            staff_id?: string;
            /** Format: uuid */
            room_id?: string;
            /** Format: date-time */
            starts_at?: string;
            /** Format: date-time */
            ends_at?: string;
            /** @enum {string} */
            status?: "completed" | "cancelled";
            reason: string;
        };
        AttendanceRecord: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            session_id: string;
            /** Format: uuid */
            student_id: string;
            /** Format: uuid */
            enrollment_id?: string;
            /** @enum {string} */
            status: "unmarked" | "present" | "absent" | "late" | "excused";
            minutes_late: number;
            note?: string;
            version: number;
            /** Format: uuid */
            updated_by?: string;
            /** Format: date-time */
            updated_at: string;
        };
        RosterRecord: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            session_id: string;
            /** Format: uuid */
            student_id: string;
            /** Format: uuid */
            enrollment_id: string;
            /** @enum {string} */
            status: "unmarked" | "present" | "absent" | "late" | "excused";
            minutes_late: number;
            note: string;
            version: number;
            /** Format: uuid */
            updated_by: string;
            /** Format: date-time */
            updated_at: string;
            student_number: string;
            first_name: string;
            last_name: string;
            first_name_ar: string;
            last_name_ar: string;
        };
        AttendanceSession: {
            /** Format: uuid */
            id: string;
            /** @enum {string} */
            kind: "day" | "lesson";
            /** Format: uuid */
            section_id: string;
            /** Format: date */
            local_date: string;
            lesson_id: string | null;
            /** @enum {string} */
            status: "open" | "submitted" | "approved";
            version: number;
            /** Format: uuid */
            opened_by: string;
            /** Format: date-time */
            opened_at: string;
            submitted_by: string | null;
            submitted_at: string | null;
            approved_by: string | null;
            approved_at: string | null;
            records?: components["schemas"]["RosterRecord"][];
        };
        AttendanceSessionInput: {
            /** @enum {string} */
            kind: "day" | "lesson";
            /** Format: uuid */
            section_id: string;
            /** Format: date */
            local_date: string;
            /** Format: uuid */
            lesson_id?: string;
        };
        AttendanceMark: {
            /** @enum {string} */
            status: "present" | "absent" | "late" | "excused";
            minutes_late?: number;
            note?: string;
            reason?: string;
        };
        DailyTeacherInput: {
            /** Format: uuid */
            section_id: string;
            /** Format: uuid */
            staff_id: string;
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
        };
        DailyTeacher: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            section_id: string;
            /** Format: uuid */
            staff_id: string;
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
        };
        AbsenceReportInput: {
            /** Format: uuid */
            student_id: string;
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
            explanation: string;
        };
        AbsenceReport: {
            /** Format: uuid */
            id: string;
            version: number;
            /** Format: uuid */
            student_id: string;
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
            explanation: string;
            /** Format: uuid */
            relationship_id: string;
            /** Format: uuid */
            author_id: string;
            /** @enum {string} */
            status: "submitted" | "approved" | "rejected" | "cancelled";
            reviewed_by?: string | null;
            reviewed_at: string | null;
            review_note?: string;
            /** Format: date-time */
            created_at: string;
        };
        ReviewInput: {
            /** @enum {string} */
            status: "approved" | "rejected" | "cancelled";
            note: string;
        };
        AttendanceHistoryEntry: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            record_id: string;
            version: number;
            /** @enum {string} */
            from_status: "unmarked" | "present" | "absent" | "late" | "excused";
            /** @enum {string} */
            to_status: "present" | "absent" | "late" | "excused";
            /** Format: int32 */
            minutes_late: number;
            note?: string;
            /** Format: uuid */
            actor_id?: string;
            reason?: string;
            /** Format: date-time */
            created_at: string;
        };
        AttendanceHistory: {
            record: components["schemas"]["AttendanceRecord"];
            history: components["schemas"]["AttendanceHistoryEntry"][];
            absence_reports: components["schemas"]["AbsenceReport"][];
            next_version: number;
            absence_reports_next_cursor: string;
        };
        StudentAttendance: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            session_id: string;
            /** Format: uuid */
            student_id: string;
            /** Format: uuid */
            enrollment_id?: string;
            /** @enum {string} */
            status: "unmarked" | "present" | "absent" | "late" | "excused";
            minutes_late: number;
            note?: string;
            version: number;
            /** Format: uuid */
            updated_by?: string;
            /** Format: date-time */
            updated_at: string;
            /** @enum {string} */
            kind: "day" | "lesson";
            /** Format: date */
            local_date: string;
            /** Format: uuid */
            section_id: string;
            lesson_id: string | null;
            /** @enum {string} */
            session_status: "open" | "submitted" | "approved";
        };
        AttendanceCorrection: {
            /** Format: uuid */
            id: string;
            version: number;
            /** Format: uuid */
            record_id: string;
            /** Format: uuid */
            requested_by: string;
            expected_version: number;
            decision_note: string;
            /** @enum {string} */
            status: "pending" | "approved" | "rejected";
            /** @enum {string} */
            to_status: "present" | "absent" | "late" | "excused";
            /** Format: int32 */
            minutes_late: number;
            reason: string;
            decided_by: string | null;
            decided_at: string | null;
            /** Format: date-time */
            created_at: string;
        };
        AttendanceStatistics: {
            /** @enum {string} */
            kind: "day" | "lesson";
            total: number;
            present: number;
            absent: number;
            late: number;
            excused: number;
        };
        AnnouncementInput: {
            /** Format: uuid */
            section_id?: string;
            title_en: string;
            title_ar?: string;
            body_en: string;
            body_ar?: string;
        };
        Announcement: {
            /** Format: uuid */
            id: string;
            version: number;
            section_id: string | null;
            title_en: string;
            title_ar: string;
            body_en: string;
            body_ar: string;
            /** Format: uuid */
            author_id: string;
            /** @enum {string} */
            status: "draft" | "published" | "archived";
            published_at: string | null;
            /** Format: date-time */
            created_at: string;
        };
        ConversationInput: {
            /** Format: uuid */
            student_id: string;
            /** Format: uuid */
            staff_id: string;
            /** Format: uuid */
            relationship_id: string;
            subject: string;
        };
        Conversation: {
            /** Format: uuid */
            id: string;
            version: number;
            /** Format: uuid */
            student_id: string;
            /** Format: uuid */
            staff_id: string;
            subject: string;
            /** Format: uuid */
            guardian_relationship_id: string;
            /** Format: uuid */
            guardian_person_id: string;
            /** Format: uuid */
            teacher_person_id: string;
            /** @enum {string} */
            status: "active" | "closed";
            /** Format: uuid */
            created_by: string;
            /** Format: date-time */
            created_at: string;
        };
        MessageInput: {
            body: string;
            /** @enum {string} */
            language: "en" | "ar";
            attachment_ids?: string[];
        };
        Message: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            conversation_id: string;
            /** Format: uuid */
            sender_id: string;
            body: string;
            /** @enum {string} */
            language: "en" | "ar";
            /** Format: date-time */
            created_at: string;
            attachment_ids?: string[];
        };
        AttachmentInput: {
            filename: string;
            /** @enum {string} */
            media_type: "text/plain" | "image/png" | "image/jpeg";
            data_base64: string;
        };
        Attachment: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            conversation_id: string;
            /** Format: uuid */
            uploaded_by: string;
            filename: string;
            /** @enum {string} */
            media_type: "text/plain" | "image/png" | "image/jpeg";
            sha256: string;
            /** Format: date-time */
            created_at: string;
            data_base64?: string;
        };
        PreferenceInput: {
            /** @enum {string} */
            language: "en" | "ar";
            in_app: boolean;
            email: boolean;
            email_address: string;
            attendance: boolean;
            announcements: boolean;
            messages: boolean;
            learning?: boolean;
        };
        Preference: {
            /** @enum {string} */
            language: "en" | "ar";
            in_app: boolean;
            email: boolean;
            email_address: string;
            attendance: boolean;
            announcements: boolean;
            messages: boolean;
            /** Format: uuid */
            person_id: string;
            version: number;
            learning: boolean;
        };
        TemplateInput: {
            subject_en: string;
            subject_ar: string;
            body_en: string;
            body_ar: string;
        };
        Template: {
            subject_en: string;
            subject_ar: string;
            body_en: string;
            body_ar: string;
            /** @enum {string} */
            code: "attendance" | "announcement" | "message" | "assignment" | "assignment_reminder" | "assignment_feedback" | "academic_result";
            version: number;
        };
        Delivery: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            notification_id: string;
            /** @enum {string} */
            delivery_kind: "in_app" | "synthetic_provider" | "provider_confirmed" | "unconfirmed";
            /** @enum {string} */
            channel: "in_app" | "email";
            /** @enum {string} */
            status: "queued" | "processing" | "processed" | "delivered" | "failed" | "suppressed";
            attempts: number;
            /** Format: date-time */
            available_at: string;
            processed_at: string | null;
            delivered_at: string | null;
            provider_reference: string | null;
            last_error_code: string | null;
        };
        Notification: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            recipient_id: string;
            dedupe_key: string;
            /** @enum {string} */
            template_code: "attendance" | "announcement" | "message" | "assignment" | "assignment_reminder" | "assignment_feedback" | "academic_result";
            attendance_record_id: string | null;
            announcement_id: string | null;
            message_id: string | null;
            /** @enum {string} */
            language: "en" | "ar";
            subject: string;
            body: string;
            /** Format: date-time */
            created_at: string;
            processed_at: string | null;
            read_at: string | null;
            /** @enum {string} */
            status: "queued" | "processed";
            deliveries: components["schemas"]["Delivery"][];
            learning_recipient_id?: string | null;
            academic_publication_id?: string | null;
        };
        NotificationRead: {
            /** Format: uuid */
            id: string;
            /** Format: date-time */
            read_at: string;
        };
        LessonHistoryEntry: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            lesson_id: string;
            version: number;
            snapshot: components["schemas"]["Lesson"];
            /** Format: uuid */
            actor_id: string;
            reason: string;
            /** Format: date-time */
            created_at: string;
        };
        DeliveryAttempt: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            delivery_id: string;
            attempt: number;
            /** @enum {string} */
            outcome: "processed" | "delivered" | "retry" | "failed";
            error_code: string;
            /** Format: date-time */
            created_at: string;
        };
        SelfStudent: {
            /** Format: uuid */
            id: string;
            student_number: string;
            first_name: string;
            last_name: string;
            first_name_ar: string;
            last_name_ar: string;
        };
        GuardianChild: {
            /** Format: uuid */
            id: string;
            student_number: string;
            first_name: string;
            last_name: string;
            first_name_ar: string;
            last_name_ar: string;
            /** Format: uuid */
            relationship_id: string;
            can_view_academics: boolean;
            can_report_absence: boolean;
            can_receive_messages: boolean;
        };
        AssignmentInput: {
            title_en: string;
            title_ar?: string;
            body_en: string;
            body_ar?: string;
            /** Format: date-time */
            due_at: string;
            allow_late: boolean;
            late_until?: string | null;
            guardian_progress: boolean;
            /** Format: uuid */
            course_id: string;
            /** Format: uuid */
            section_id?: string;
            /** @enum {string} */
            target_type: "course" | "class" | "students";
            student_ids?: string[];
        };
        AssignmentEdit: {
            title_en: string;
            title_ar?: string;
            body_en: string;
            body_ar?: string;
            /** Format: date-time */
            due_at: string;
            allow_late: boolean;
            late_until?: string | null;
            guardian_progress: boolean;
        };
        AssignmentTransition: {
            /** @enum {string} */
            action: "publish" | "schedule" | "unschedule" | "close" | "archive";
            /** Format: date-time */
            publish_at?: string;
        };
        LearningFile: {
            /** Format: uuid */
            id: string;
            content_id: string | null;
            assignment_id: string | null;
            student_id: string | null;
            /** Format: uuid */
            uploaded_by: string;
            filename: string;
            /** @enum {string} */
            media_type: "text/plain" | "image/png" | "image/jpeg";
            size: number;
            sha256: string;
            /** Format: date-time */
            created_at: string;
        };
        LearningFileDownload: {
            /** Format: uuid */
            id: string;
            content_id: string | null;
            assignment_id: string | null;
            student_id: string | null;
            /** Format: uuid */
            uploaded_by: string;
            filename: string;
            /** @enum {string} */
            media_type: "text/plain" | "image/png" | "image/jpeg";
            size: number;
            sha256: string;
            /** Format: date-time */
            created_at: string;
            data_base64: string;
        };
        LearningFileInput: {
            filename: string;
            /** @enum {string} */
            media_type: "text/plain" | "image/png" | "image/jpeg";
            data_base64: string;
            /** Format: uuid */
            student_id?: string;
        };
        Assignment: {
            /** Format: uuid */
            id: string;
            title_en: string;
            title_ar: string;
            body_en: string;
            body_ar: string;
            /** Format: date-time */
            due_at: string;
            allow_late: boolean;
            late_until: string | null;
            guardian_progress: boolean;
            /** Format: uuid */
            course_id: string;
            section_id: string | null;
            /** @enum {string} */
            target_type: "course" | "class" | "students";
            /** Format: uuid */
            author_id: string;
            /** @enum {string} */
            status: "draft" | "scheduled" | "published" | "closed" | "archived";
            publish_at: string | null;
            published_at: string | null;
            publisher_id: string | null;
            version: number;
            /** Format: date-time */
            created_at: string;
            files?: components["schemas"]["LearningFile"][];
        };
        LearningContentInput: {
            title_en: string;
            title_ar?: string;
            body_en: string;
            body_ar?: string;
            /** Format: uuid */
            course_id: string;
            /** Format: uuid */
            section_id?: string;
            /** Format: uuid */
            lesson_id?: string;
            /** @enum {string} */
            kind: "material" | "lesson_plan";
            resource_url?: string;
        };
        LearningContentEdit: {
            title_en: string;
            title_ar?: string;
            body_en: string;
            body_ar?: string;
            /** @enum {string} */
            kind: "material" | "lesson_plan";
            resource_url?: string;
        };
        LearningContent: {
            /** Format: uuid */
            id: string;
            title_en: string;
            title_ar: string;
            body_en: string;
            body_ar: string;
            /** Format: uuid */
            course_id: string;
            section_id: string | null;
            lesson_id: string | null;
            /** @enum {string} */
            kind: "material" | "lesson_plan";
            resource_url: string;
            /** Format: uuid */
            author_id: string;
            /** @enum {string} */
            status: "draft" | "published" | "archived";
            published_at: string | null;
            version: number;
            /** Format: date-time */
            created_at: string;
            files?: components["schemas"]["LearningFile"][];
        };
        AssignmentRecipient: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            assignment_id: string;
            /** Format: uuid */
            student_id: string;
            /** Format: uuid */
            enrollment_id?: string;
            /** @enum {string} */
            status: "missing" | "draft" | "submitted" | "returned" | "reviewed" | "completed";
            version: number;
            due_override: string | null;
            allow_late_override: boolean | null;
            late_until_override: string | null;
            accommodation?: string;
            revision_allowed: boolean;
            revision_due_at: string | null;
            last_submitted_at: string | null;
            late: boolean;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            effective_due_at?: string;
            student_number?: string;
        };
        AssignmentDashboard: {
            /** Format: uuid */
            id: string;
            title_en: string;
            title_ar: string;
            body_en: string;
            body_ar: string;
            /** Format: date-time */
            due_at: string;
            allow_late: boolean;
            late_until: string | null;
            guardian_progress: boolean;
            /** Format: uuid */
            course_id: string;
            section_id: string | null;
            /** @enum {string} */
            target_type: "course" | "class" | "students";
            /** Format: uuid */
            author_id: string;
            /** @enum {string} */
            status: "draft" | "scheduled" | "published" | "closed" | "archived";
            publish_at: string | null;
            published_at: string | null;
            publisher_id: string | null;
            version: number;
            /** Format: date-time */
            created_at: string;
            /** Format: uuid */
            recipient_id: string;
            recipient_version: number;
            /** Format: uuid */
            student_id: string;
            progress: ("missing" | "draft" | "submitted" | "returned" | "reviewed" | "completed") | null;
            late: boolean | null;
            /** Format: date-time */
            effective_due_at: string;
            overdue: boolean | null;
        };
        AssignmentSummary: {
            /** Format: uuid */
            student_id: string;
            total: number;
            completed: number;
            submitted: number;
            missing: number;
            returned: number;
            overdue: number;
        };
        SubmissionInput: {
            /** @enum {string} */
            kind: "draft" | "submitted";
            body: string;
            /** @enum {string} */
            language: "en" | "ar";
            file_ids?: string[];
        };
        LearningSubmission: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            recipient_id: string;
            number: number;
            /** @enum {string} */
            kind: "draft" | "submitted";
            body: string;
            /** @enum {string} */
            language: "en" | "ar";
            late: boolean;
            /** Format: uuid */
            author_id: string;
            /** Format: date-time */
            created_at: string;
            file_ids: string[];
            recipient_version?: number;
        };
        LearningFeedbackInput: {
            /** Format: uuid */
            submission_id: string;
            /** @enum {string} */
            kind: "comment" | "return" | "review" | "complete";
            body: string;
            private_note?: string;
            parent_visible: boolean;
            /** Format: date-time */
            revision_due_at?: string;
        };
        LearningFeedback: {
            /** Format: uuid */
            submission_id: string;
            /** @enum {string} */
            kind: "comment" | "return" | "review" | "complete";
            body: string;
            private_note?: string;
            parent_visible: boolean;
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            recipient_id: string;
            /** Format: uuid */
            author_id: string;
            /** Format: date-time */
            created_at: string;
        };
        AccommodationInput: {
            /** Format: date-time */
            due_at: string;
            allow_late: boolean;
            late_until?: string | null;
            reason: string;
        };
        LearningHistory: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            assignment_id: string;
            version: number;
            snapshot: components["schemas"]["Assignment"];
            /** Format: date-time */
            created_at: string;
        };
        LearningCourse: {
            /** Format: uuid */
            id: string;
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
            curriculum_id: string;
            subject: components["schemas"]["Subject"];
        };
        AssessmentCategory: {
            code: string;
            name_en: string;
            name_ar: string;
            weight: string;
        };
        AssessmentBand: {
            code: string;
            label_en: string;
            label_ar: string;
            lower: string;
            upper: string;
            value: string;
            points: string;
            passed: boolean;
        };
        AssessmentCriterion: {
            code: string;
            name_en: string;
            name_ar: string;
            maximum: string;
            weight: string;
        };
        AssessmentPolicyInput: {
            /** Format: uuid */
            program_id: string;
            /** Format: uuid */
            subject_id?: string;
            /** Format: uuid */
            scheme_id?: string;
            code: string;
            name_en: string;
            name_ar: string;
            /** @enum {string} */
            model: "numeric" | "percentage" | "letter" | "descriptive" | "pass_fail" | "competency";
            /** @enum {string} */
            aggregation: "weighted_mean" | "all_pass";
            minimum: string;
            maximum: string;
            precision: number;
            /** @enum {string} */
            rounding: "half_up" | "half_even" | "floor" | "ceiling";
            /** @enum {string} */
            missing: "incomplete" | "zero" | "exclude";
            /** @enum {string} */
            exemption: "incomplete" | "exclude";
            /** @enum {string} */
            empty_category: "incomplete" | "exclude";
            /** @enum {string} */
            grade_publisher: "teacher" | "administrator";
            student_visible: boolean;
            guardian_visible: boolean;
            categories: components["schemas"]["AssessmentCategory"][];
            bands: components["schemas"]["AssessmentBand"][];
            criteria: components["schemas"]["AssessmentCriterion"][];
            /** Format: uuid */
            supersedes_id?: string;
        };
        AssessmentPolicy: {
            /** Format: uuid */
            program_id: string;
            subject_id: string | null;
            scheme_id: string | null;
            code: string;
            name_en: string;
            name_ar: string;
            /** @enum {string} */
            model: "numeric" | "percentage" | "letter" | "descriptive" | "pass_fail" | "competency";
            /** @enum {string} */
            aggregation: "weighted_mean" | "all_pass";
            minimum: string;
            maximum: string;
            precision: number;
            /** @enum {string} */
            rounding: "half_up" | "half_even" | "floor" | "ceiling";
            /** @enum {string} */
            missing: "incomplete" | "zero" | "exclude";
            /** @enum {string} */
            exemption: "incomplete" | "exclude";
            /** @enum {string} */
            empty_category: "incomplete" | "exclude";
            /** @enum {string} */
            grade_publisher: "teacher" | "administrator";
            student_visible: boolean;
            guardian_visible: boolean;
            categories: components["schemas"]["AssessmentCategory"][];
            bands: components["schemas"]["AssessmentBand"][];
            criteria: components["schemas"]["AssessmentCriterion"][];
            /** Format: uuid */
            id: string;
            revision: number;
            supersedes_id: string | null;
            sealed: boolean;
            /** Format: uuid */
            author_id: string;
            /** Format: date-time */
            created_at: string;
        };
        ReportingPeriodInput: {
            /** Format: uuid */
            academic_year_id: string;
            /** Format: uuid */
            term_id?: string;
            code: string;
            name_en: string;
            name_ar: string;
            /** @enum {string} */
            kind: "term" | "annual";
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
            /** @enum {string} */
            approval_role: "principal" | "school_admin" | "either";
        };
        ReportingPeriod: {
            /** Format: uuid */
            academic_year_id: string;
            term_id: string | null;
            code: string;
            name_en: string;
            name_ar: string;
            /** @enum {string} */
            kind: "term" | "annual";
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
            /** @enum {string} */
            approval_role: "principal" | "school_admin" | "either";
            /** Format: uuid */
            id: string;
            /** @enum {string} */
            status: "open" | "review" | "approved" | "published";
            version: number;
            /** Format: uuid */
            created_by: string;
            approved_by: string | null;
            /** Format: date-time */
            created_at: string;
        };
        AssessmentInput: {
            /** Format: uuid */
            period_id: string;
            /** Format: uuid */
            course_id: string;
            /** Format: uuid */
            section_id?: string;
            /** Format: uuid */
            assignment_id?: string;
            /** Format: uuid */
            policy_id: string;
            category: string;
            title_en: string;
            title_ar: string;
            /** @enum {string} */
            kind: "formative" | "summative";
            assessment_type: string;
            /** Format: date */
            assessed_on: string;
            weight: string;
        };
        Assessment: {
            /** Format: uuid */
            period_id: string;
            /** Format: uuid */
            course_id: string;
            section_id: string | null;
            assignment_id: string | null;
            /** Format: uuid */
            policy_id: string;
            category: string;
            title_en: string;
            title_ar: string;
            /** @enum {string} */
            kind: "formative" | "summative";
            assessment_type: string;
            /** Format: date */
            assessed_on: string;
            weight: string;
            /** Format: uuid */
            id: string;
            /** @enum {string} */
            status: "draft" | "published";
            version: number;
            /** Format: uuid */
            author_id: string;
            /** Format: date-time */
            created_at: string;
        };
        AcademicGradeInput: {
            /** Format: uuid */
            student_id: string;
            /** @enum {string} */
            state: "graded" | "missing" | "excused" | "incomplete" | "exempt";
            value?: string;
            band?: string;
            rubric?: {
                code: string;
                value: string;
            }[];
            /** Format: uuid */
            submission_id?: string;
            comment_en?: string;
            comment_ar?: string;
            private_note?: string;
        };
        GradeAmendmentInput: {
            /** Format: uuid */
            student_id: string;
            /** @enum {string} */
            state: "graded" | "missing" | "excused" | "incomplete" | "exempt";
            value?: string;
            band?: string;
            rubric?: {
                code: string;
                value: string;
            }[];
            /** Format: uuid */
            submission_id?: string;
            comment_en?: string;
            comment_ar?: string;
            private_note?: string;
            reason: string;
        };
        GradeBulkInput: {
            items: components["schemas"]["AcademicGradeInput"][];
        };
        AssessmentGrade: {
            /** Format: uuid */
            student_id: string;
            /** @enum {string} */
            state: "graded" | "missing" | "excused" | "incomplete" | "exempt";
            value: string;
            band: string;
            rubric: {
                code: string;
                value: string;
            }[];
            submission_id: string | null;
            comment_en: string;
            comment_ar: string;
            private_note: string;
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            assessment_id: string;
            revision: number;
            supersedes_id: string | null;
            /** @enum {string} */
            status: "draft" | "review" | "approved" | "published";
            reason: string;
            /** Format: uuid */
            author_id: string;
            approved_by: string | null;
            published_by: string | null;
            version: number;
            /** Format: date-time */
            created_at: string;
            published_at: string | null;
        };
        PortalGrade: {
            /** Format: uuid */
            student_id: string;
            /** @enum {string} */
            state: "graded" | "missing" | "excused" | "incomplete" | "exempt";
            value: string;
            band: string;
            rubric: {
                code: string;
                value: string;
            }[];
            submission_id: string | null;
            comment_en: string;
            comment_ar: string;
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            assessment_id: string;
            revision: number;
            supersedes_id: string | null;
            /** @enum {string} */
            status: "draft" | "review" | "approved" | "published";
            reason: string;
            version: number;
            /** Format: date-time */
            created_at: string;
            published_at: string | null;
            assessment_title_en?: string;
            assessment_title_ar?: string;
            /** Format: uuid */
            course_id?: string;
            /** Format: uuid */
            period_id?: string;
            /** @enum {string} */
            grading_model?: "numeric" | "percentage" | "letter" | "descriptive" | "pass_fail" | "competency";
            subject_name_en?: string;
            subject_name_ar?: string;
        };
        AcademicResult: {
            complete: boolean;
            authoritative: boolean;
            value: string | null;
            band: components["schemas"]["AssessmentBand"] | null;
            passed: boolean | null;
            missing: number;
            exempt: number;
            categories: {
                code: string;
                value: string | null;
                included: number;
                missing: number;
                exempt: number;
            }[];
            issues: ("incomplete_data" | "policy_not_applicable" | "no_applicable_assessments" | "mixed_policy_versions")[];
        };
        AcademicProgress: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            student_id: string;
            /** Format: uuid */
            course_id: string;
            /** Format: uuid */
            period_id: string;
            policy: components["schemas"]["AssessmentPolicy"] | null;
            grades: components["schemas"]["PortalGrade"][];
            comment_en: string;
            comment_ar: string;
            result: components["schemas"]["AcademicResult"];
        };
        GradebookStudent: {
            /** Format: uuid */
            id: string;
            student_number: string;
            first_name: string;
            last_name: string;
            first_name_ar: string;
            last_name_ar: string;
            progress: components["schemas"]["AcademicProgress"];
        };
        ProgressCommentInput: {
            /** Format: uuid */
            period_id: string;
            /** Format: uuid */
            course_id: string;
            /** Format: uuid */
            student_id: string;
            comment_en: string;
            comment_ar: string;
            private_note: string;
        };
        ProgressComment: {
            /** Format: uuid */
            period_id: string;
            /** Format: uuid */
            course_id: string;
            /** Format: uuid */
            student_id: string;
            comment_en: string;
            comment_ar: string;
            private_note: string;
            /** Format: uuid */
            id: string;
            version: number;
            /** Format: uuid */
            author_id: string;
        };
        ReportDefinitionInput: {
            /** Format: uuid */
            period_id: string;
            /** Format: uuid */
            program_id: string;
            code: string;
            revision: number;
            title_en: string;
            title_ar: string;
            labels_en: {
                [key: string]: string;
            };
            labels_ar: {
                [key: string]: string;
            };
            include_attendance: boolean;
            allow_incomplete: boolean;
            student_visible: boolean;
            guardian_visible: boolean;
            /** @enum {string} */
            approval_role: "principal" | "school_admin" | "either";
            /** @enum {string} */
            publication_role: "principal" | "school_admin" | "either";
        };
        ReportDefinition: {
            /** Format: uuid */
            period_id: string;
            /** Format: uuid */
            program_id: string;
            code: string;
            revision: number;
            title_en: string;
            title_ar: string;
            labels_en: {
                [key: string]: string;
            };
            labels_ar: {
                [key: string]: string;
            };
            include_attendance: boolean;
            allow_incomplete: boolean;
            student_visible: boolean;
            guardian_visible: boolean;
            /** @enum {string} */
            approval_role: "principal" | "school_admin" | "either";
            /** @enum {string} */
            publication_role: "principal" | "school_admin" | "either";
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            created_by: string;
            /** Format: date-time */
            created_at: string;
        };
        ReportCardInput: {
            /** Format: uuid */
            definition_id: string;
            /** Format: uuid */
            student_id: string;
            course_ids: string[];
            /** Format: uuid */
            supersedes_id?: string;
            reason?: string;
        };
        ReportSubject: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            student_id: string;
            /** Format: uuid */
            course_id: string;
            /** Format: uuid */
            period_id: string;
            policy: components["schemas"]["AssessmentPolicy"] | null;
            grades: components["schemas"]["PortalGrade"][];
            comment_en: string;
            comment_ar: string;
            result: components["schemas"]["AcademicResult"];
            course: {
                /** Format: uuid */
                id: string;
                /** Format: uuid */
                academic_year_id: string;
                /** Format: uuid */
                program_id: string;
                /** Format: uuid */
                subject_id: string;
                /** Format: uuid */
                campus_id: string;
                code: string;
                subject: components["schemas"]["Subject"];
            };
        };
        ReportSnapshot: {
            /** @constant */
            format_version: 1;
            definition: components["schemas"]["ReportDefinition"];
            period: {
                /** Format: uuid */
                academic_year_id: string;
                name_en: string;
                name_ar: string;
                /** @enum {string} */
                kind: "term" | "annual";
                /** Format: date */
                starts_on: string;
                /** Format: date */
                ends_on: string;
                /** Format: uuid */
                id: string;
            };
            student: {
                /** Format: uuid */
                id: string;
                student_number: string;
                first_name: string;
                last_name: string;
                first_name_ar: string;
                last_name_ar: string;
            };
            subjects: components["schemas"]["ReportSubject"][];
            attendance: {
                /** @enum {string} */
                kind: "day" | "lesson";
                /** @enum {string} */
                status: "unmarked" | "present" | "absent" | "late" | "excused";
                count: number;
            }[];
        };
        ReportCard: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            definition_id: string;
            /** Format: uuid */
            student_id: string;
            revision: number;
            supersedes_id: string | null;
            reason: string;
            /** @enum {string} */
            status: "draft" | "review" | "approved" | "published";
            snapshot: components["schemas"]["ReportSnapshot"];
            version: number;
            /** Format: uuid */
            author_id?: string;
            approved_by?: string | null;
            published_by?: string | null;
            /** Format: date-time */
            created_at: string;
            published_at: string | null;
        };
        GradeHistory: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            grade_id: string;
            version: number;
            snapshot: components["schemas"]["AssessmentGrade"];
            /** Format: date-time */
            created_at: string;
        };
        ReportHistory: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            report_id: string;
            version: number;
            snapshot: components["schemas"]["ReportCard"];
            /** Format: date-time */
            created_at: string;
        };
        AcademicCourseSummary: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            course_id: string;
            assessment_count: number;
            students: number;
            published_grades: number;
            missing_grades: number;
        };
        PeriodTransition: {
            /** @enum {string} */
            action: "review" | "reopen" | "approve" | "publish";
        };
        GradeTransition: {
            /** @enum {string} */
            action: "review" | "return" | "approve" | "publish";
        };
        ReportTransition: {
            /** @enum {string} */
            action: "review" | "return" | "approve" | "publish";
        };
        ManagementStudent: {
            /** Format: uuid */
            id: string;
            student_number: string;
            first_name: string;
            last_name: string;
            first_name_ar: string;
            last_name_ar: string;
            /** @enum {string} */
            enrollment_status: "none" | "pending" | "active" | "withdrawn" | "completed" | "cancelled";
            campus_id: string | null;
            campus_name_en: string | null;
            campus_name_ar: string | null;
            section_id: string | null;
            section_code: string | null;
        };
        ManagementGuardian: {
            /** Format: uuid */
            guardian_id: string;
            relationship_code: string;
            can_view_academics: boolean;
            can_view_finance: boolean;
            can_report_absence: boolean;
            can_receive_messages: boolean;
            restricted: boolean;
            /** Format: date */
            valid_from: string;
            valid_until: string | null;
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            student_id: string;
            first_name: string;
            last_name: string;
            first_name_ar: string;
            last_name_ar: string;
        };
        ManagementCourse: {
            /** Format: uuid */
            id: string;
            code: string;
            name_en: string;
            name_ar: string;
            /** Format: uuid */
            academic_year_id: string;
        };
        ManagementContext: {
            student: components["schemas"]["ManagementStudent"];
            guardians: components["schemas"]["ManagementGuardian"][];
            courses: components["schemas"]["ManagementCourse"][];
        };
        ManagementSearchResult: {
            /** Format: uuid */
            id: string;
            /** @enum {string} */
            kind: "students" | "teachers" | "classes";
            label_en: string;
            label_ar: string;
            identifier: string;
        };
        ManagementOverview: {
            /** Format: date */
            local_date: string;
            students: number;
            active_students: number;
            unresolved_absences: number;
            pending_academic_approvals: number;
            academic_years: components["schemas"]["Year"][];
            attendance: {
                /** @enum {string} */
                status: "unmarked" | "present" | "absent" | "late" | "excused";
                count: number;
            }[];
            open_attendance_sessions: number;
        };
        TeachingClass: {
            /** Format: uuid */
            id: string;
            code: string;
            /** Format: uuid */
            course_id: string;
            /** Format: uuid */
            academic_year_id: string;
            academic_year_code: string;
            student_count: number;
        };
        TeachingStudent: {
            /** Format: uuid */
            id: string;
            student_number: string;
            first_name: string;
            last_name: string;
            first_name_ar: string;
            last_name_ar: string;
        };
        CommunicationContact: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            student_id: string;
            /** Format: uuid */
            staff_id: string;
            relationship_code: string;
        };
        AssessmentRosterStudent: {
            /** Format: uuid */
            id: string;
            student_number: string;
            first_name: string;
            last_name: string;
            first_name_ar: string;
            last_name_ar: string;
            current_eligible: boolean;
        };
        FamilyClass: {
            /** Format: uuid */
            id: string;
            code: string;
            /** Format: uuid */
            academic_year_id: string;
        };
        FamilyLessonPreview: {
            /** Format: uuid */
            id: string;
            name_en: string;
            name_ar: string;
            /** Format: date-time */
            starts_at: string;
            /** Format: date-time */
            ends_at: string;
            /** @enum {string} */
            status: "scheduled" | "completed" | "cancelled";
        };
        FamilyHomeworkPreview: {
            /** Format: uuid */
            id: string;
            title_en: string;
            title_ar: string;
            /** Format: date-time */
            due_at: string;
        };
        FamilyAttendancePreview: {
            /** Format: uuid */
            id: string;
            /** Format: date */
            local_date: string;
            /** @enum {string} */
            kind: "day" | "lesson";
            /** @enum {string} */
            status: "unmarked" | "present" | "absent" | "late" | "excused";
        };
        FamilyResultPreview: {
            /** Format: uuid */
            id: string;
            title_en: string;
            title_ar: string;
            /** Format: date-time */
            published_at: string;
        };
        FamilyChild: {
            /** Format: uuid */
            id: string;
            student_number: string;
            first_name: string;
            last_name: string;
            first_name_ar: string;
            last_name_ar: string;
            /** Format: uuid */
            relationship_id: string;
            can_view_academics: boolean;
            can_report_absence: boolean;
            can_receive_messages: boolean;
            /** Format: uuid */
            school_id: string;
            classes: components["schemas"]["FamilyClass"][];
            today_lessons: components["schemas"]["FamilyLessonPreview"][];
            today_lesson_count: number | null;
            due_assignments: components["schemas"]["FamilyHomeworkPreview"][];
            recent_attendance: components["schemas"]["FamilyAttendancePreview"][];
            published_results: components["schemas"]["FamilyResultPreview"][];
        };
        FamilyCourse: {
            /** Format: uuid */
            id: string;
            code: string;
            name_en: string;
            name_ar: string;
            /** Format: uuid */
            academic_year_id: string;
        };
        FamilyPeriod: {
            /** Format: uuid */
            id: string;
            name_en: string;
            name_ar: string;
            /** Format: date */
            starts_on: string;
            /** Format: date */
            ends_on: string;
            /** @enum {string} */
            kind: "term" | "annual";
        };
        FamilyContext: {
            child: components["schemas"]["FamilyChild"];
            courses: components["schemas"]["FamilyCourse"][];
            periods: components["schemas"]["FamilyPeriod"][];
            /** Format: date */
            local_date: string;
        };
        GuardianProfileView: {
            /** Format: uuid */
            id: string;
            first_name: string;
            last_name: string;
            first_name_ar: string;
            last_name_ar: string;
            /** @enum {string} */
            preferred_language: "ar" | "en";
        };
        GuardianTeacherContact: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            staff_id: string;
            /** Format: uuid */
            student_id: string;
            /** Format: uuid */
            relationship_id: string;
            name_en: string;
            name_ar: string;
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
    healthLive: {
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
    healthReady: {
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
    currentIdentity: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                    "application/json": components["schemas"]["Me"];
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
    getSchool: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                    "application/json": components["schemas"]["School"];
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
    updateSchool: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SchoolUpdateInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["School"];
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
    listCampus: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Campus"][];
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
    createCampus: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CampusInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Campus"];
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
    listYear: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Year"][];
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
    createYear: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["YearInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Year"];
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
    listTerms: {
        parameters: {
            query: {
                academic_year_id: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Term"][];
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
    createTerm: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TermInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Term"];
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
    listCurriculum: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Curriculum"][];
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
    createCurriculum: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CurriculumInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Curriculum"];
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
    listProgram: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Program"][];
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
    createProgram: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ProgramInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Program"];
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
    listGrade: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Grade"][];
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
    createGrade: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GradeInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Grade"];
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
    listSubject: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Subject"][];
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
    createSubject: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SubjectInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Subject"];
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
    listSection: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Section"][];
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
    createSection: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SectionInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Section"];
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
    listCourse: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Course"][];
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
    createCourse: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CourseInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Course"];
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
    listTeachingAssignments: {
        parameters: {
            query: {
                staff_id: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["TeachingAssignment"][];
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
    createTeachingAssignment: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TeachingAssignmentInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TeachingAssignment"];
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
    createPerson: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PersonInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Person"];
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
    listStudents: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Quoted version on versioned resource responses */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: components["schemas"]["Student"][];
                        /** @description Last returned UUID, or empty string when no next page. */
                        next_cursor: string;
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
    createStudent: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StudentInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    /** @description Quoted version on versioned resource responses */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Student"];
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
    getStudent: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Present only for an authorized personal-record response. */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Student"] | components["schemas"]["TeacherStudent"];
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
    updateStudent: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PersonInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Quoted version on versioned resource responses */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Student"];
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
    createGuardian: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GuardianInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Guardian"];
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
    listStaff: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Staff"][];
                        /** @description Last returned UUID, or empty string when no next page. */
                        next_cursor: string;
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
    createStaff: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StaffInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Staff"];
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
    linkGuardian: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RelationshipInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    /** @description Quoted version on versioned resource responses */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Relationship"];
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
    restrictGuardian: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
                relationshipID: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Quoted version on versioned resource responses */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Relationship"];
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
    createEnrollment: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EnrollmentInput"];
            };
        };
        responses: {
            /** @description Idempotent replay; Idempotency-Replayed: true */
            200: {
                headers: {
                    /** @description Quoted version on versioned resource responses */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Enrollment"];
                };
            };
            /** @description Success */
            201: {
                headers: {
                    /** @description Quoted version on versioned resource responses */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Enrollment"];
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
    listStudentEnrollments: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Quoted version on versioned resource responses */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        items: components["schemas"]["Enrollment"][];
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
    transitionEnrollment: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TransitionInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Quoted version on versioned resource responses */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Enrollment"];
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
    createSectionPlacement: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SectionPlacementInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    /** @description Quoted version on versioned resource responses */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SectionPlacement"];
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
    createCoursePlacement: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CoursePlacementInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    /** @description Quoted version on versioned resource responses */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CoursePlacement"];
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
    getCalendarSettings: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                    "application/json": components["schemas"]["CalendarSettings"];
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
    updateCalendarSettings: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CalendarSettingsInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CalendarSettings"];
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
    listCalendarExceptions: {
        parameters: {
            query: {
                academic_year_id: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["CalendarException"][];
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
    createCalendarException: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CalendarExceptionInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CalendarException"];
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
    listGradingSchemes: {
        parameters: {
            query: {
                program_id: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["GradingScheme"][];
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
    createGradingScheme: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SchemeInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GradingScheme"];
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
    listGradeBands: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                        items: components["schemas"]["GradeBand"][];
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
    createGradeBand: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BandInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GradeBand"];
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
    assignGradeScheme: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GradeSchemeAssignment"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GradeSchemeAssignment"];
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
    linkLocalIdentity: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["IdentityLinkInput"];
            };
        };
        responses: {
            /** @description Existing identical link */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IdentityLink"];
                };
            };
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IdentityLink"];
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
    listRoleGrants: {
        parameters: {
            query: {
                person_id: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["RoleGrant"][];
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
    createRoleGrant: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RoleGrantInput"];
            };
        };
        responses: {
            /** @description Idempotent replay */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RoleGrant"];
                };
            };
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RoleGrant"];
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
    revokeRoleGrant: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["RoleGrant"];
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
    listMyRoleGrants: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["RoleGrant"][];
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
    getPerson: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["Person"];
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
    updatePerson: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PersonInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Person"];
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
    transitionStaff: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["StaffTransitionInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Staff"];
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
    transitionAcademicYear: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["YearTransitionInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Year"];
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
    closeSectionPlacement: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
                placementID: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PlacementClosureInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Quoted placement version. */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SectionPlacement"];
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
    closeCoursePlacement: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
                placementID: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PlacementClosureInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Quoted placement version. */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CoursePlacement"];
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
    setCampusStatus: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CampusStatusInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Quoted campus version. */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Campus"];
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
    transferEnrollment: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "Idempotency-Key": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TransferInput"];
            };
        };
        responses: {
            /** @description Idempotent replay */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TransferResult"];
                };
            };
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TransferResult"];
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
    listTimetableRoom: {
        parameters: {
            query: {
                after?: string;
                limit?: number;
                q?: string;
                campus_id: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Room"][];
                        next_cursor: string;
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
    createTimetableRoom: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RoomInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Room"];
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
    listTimetablePeriod: {
        parameters: {
            query: {
                after?: string;
                limit?: number;
                q?: string;
                campus_id: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Period"][];
                        next_cursor: string;
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
    createTimetablePeriod: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PeriodInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Period"];
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
    listTimetableRule: {
        parameters: {
            query: {
                after?: string;
                limit?: number;
                q?: string;
                campus_id: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Rule"][];
                        next_cursor: string;
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
    createTimetableRule: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RuleInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Rule"];
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
    generateLessons: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GenerateInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GeneratedLessons"];
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
    retireTimetableRule: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["Rule"];
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
    listLessons: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                section_id?: string;
                starts_on?: string;
                ends_on?: string;
                student_id?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Lesson"][];
                        next_cursor: string;
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
    changeLesson: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LessonChange"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Lesson"];
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
    assignDailyAttendanceTeacher: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DailyTeacherInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DailyTeacher"];
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
    listAttendanceSessions: {
        parameters: {
            query: {
                after?: string;
                limit?: number;
                starts_on: string;
                ends_on: string;
                section_id?: string;
                kind?: "day" | "lesson";
                status?: "open" | "submitted" | "approved";
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["AttendanceSession"][];
                        next_cursor: string;
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
    openAttendanceSession: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AttendanceSessionInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AttendanceSession"];
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
    getAttendanceSession: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["AttendanceSession"];
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
    submitAttendanceSession: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["AttendanceSession"];
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
    approveAttendanceSession: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["AttendanceSession"];
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
    markAttendanceRecord: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AttendanceMark"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AttendanceRecord"];
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
    correctAttendanceRecord: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AttendanceMark"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AttendanceRecord"];
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
    getAttendanceHistory: {
        parameters: {
            query?: {
                after_version?: number;
                limit?: number;
                report_after?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["AttendanceHistory"];
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
    listStudentAttendance: {
        parameters: {
            query: {
                after?: string;
                limit?: number;
                starts_on: string;
                ends_on: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                        items: components["schemas"]["StudentAttendance"][];
                        next_cursor: string;
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
    listAbsenceReports: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                student_id?: string;
                status?: "submitted" | "approved" | "rejected" | "cancelled";
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["AbsenceReport"][];
                        next_cursor: string;
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
    reportAbsence: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AbsenceReportInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AbsenceReport"];
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
    reviewAbsenceReport: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReviewInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AbsenceReport"];
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
    requestAttendanceCorrection: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "Idempotency-Key": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AttendanceMark"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AttendanceCorrection"];
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
    decideAttendanceCorrection: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReviewInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AttendanceCorrection"];
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
    attendanceStatistics: {
        parameters: {
            query: {
                starts_on: string;
                ends_on: string;
                section_id?: string;
                kind: "day" | "lesson";
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                    "application/json": components["schemas"]["AttendanceStatistics"];
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
    listAnnouncements: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                section_id?: string;
                q?: string;
                student_id?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Announcement"][];
                        next_cursor: string;
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
    createAnnouncement: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AnnouncementInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Announcement"];
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
    publishAnnouncement: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["Announcement"];
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
    archiveAnnouncement: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["Announcement"];
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
    listConversations: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                q?: string;
                student_id?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Conversation"][];
                        next_cursor: string;
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
    createConversation: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ConversationInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Conversation"];
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
    closeConversation: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["Conversation"];
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
    listMessages: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                q?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                        items: components["schemas"]["Message"][];
                        next_cursor: string;
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
    sendMessage: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MessageInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Message"];
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
    uploadMessageAttachment: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AttachmentInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Attachment"];
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
    downloadMessageAttachment: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["Attachment"];
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
    getNotificationPreferences: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                    "application/json": components["schemas"]["Preference"];
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
    setNotificationPreferences: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PreferenceInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Preference"];
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
    listNotificationTemplates: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Template"][];
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
    updateNotificationTemplate: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                code: "attendance" | "announcement" | "message" | "assignment" | "assignment_reminder" | "assignment_feedback" | "academic_result";
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TemplateInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Template"];
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
    listNotifications: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                unread?: boolean;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Notification"][];
                        next_cursor: string;
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
    readNotification: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["NotificationRead"];
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
    listNotificationDeliveries: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                status?: "queued" | "processing" | "processed" | "delivered" | "failed" | "suppressed";
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Delivery"][];
                        next_cursor: string;
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
    listAttendanceCorrections: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                status?: "pending" | "approved" | "rejected";
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["AttendanceCorrection"][];
                        next_cursor: string;
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
    getLessonHistory: {
        parameters: {
            query?: {
                after_version?: number;
                limit?: number;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                        items: components["schemas"]["LessonHistoryEntry"][];
                        next_version: number;
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
    listDeliveryAttempts: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                        items: components["schemas"]["DeliveryAttempt"][];
                        next_cursor: string;
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
    listAuthorizedChildren: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["GuardianChild"][];
                        next_cursor: string;
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
    getSelfStudent: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                    "application/json": components["schemas"]["SelfStudent"];
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
    learningCourses: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                q?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["LearningCourse"][];
                        next_cursor: string;
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
    listLearningContent: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                q?: string;
                course_id?: string;
                kind?: "material" | "lesson_plan";
                section_id?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["LearningContent"][];
                        next_cursor: string;
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
    createLearningContent: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LearningContentInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LearningContent"];
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
    getLearningContent: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["LearningContent"];
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
    editLearningContent: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LearningContentEdit"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LearningContent"];
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
    publishLearningContent: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["LearningContent"];
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
    archiveLearningContent: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["LearningContent"];
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
    listAssignments: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                q?: string;
                course_id?: string;
                status?: "draft" | "scheduled" | "published" | "closed" | "archived";
                section_id?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Assignment"][];
                        next_cursor: string;
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
    createAssignment: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AssignmentInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Assignment"];
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
    getAssignment: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["Assignment"];
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
    editAssignment: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AssignmentEdit"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Assignment"];
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
    transitionAssignment: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AssignmentTransition"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Assignment"];
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
    listAssignmentRecipients: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                        items: components["schemas"]["AssignmentRecipient"][];
                        next_cursor: string;
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
    assignmentHistory: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                        items: components["schemas"]["LearningHistory"][];
                        next_cursor: string;
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
    assignmentsUploadFile: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LearningFileInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LearningFile"];
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
    learningcontentUploadFile: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LearningFileInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LearningFile"];
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
    downloadLearningFile: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["LearningFileDownload"];
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
    childAssignments: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                starts_on?: string;
                ends_on?: string;
                status?: "draft" | "scheduled" | "published" | "closed" | "archived";
                course_id?: string;
                progress?: "upcoming" | "overdue" | "missing" | "submitted" | "reviewed" | "returned" | "completed";
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                        items: components["schemas"]["AssignmentDashboard"][];
                        next_cursor: string;
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
    childAssignmentSummary: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["AssignmentSummary"];
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
    selfAssignments: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                starts_on?: string;
                ends_on?: string;
                status?: "draft" | "scheduled" | "published" | "closed" | "archived";
                course_id?: string;
                progress?: "upcoming" | "overdue" | "missing" | "submitted" | "reviewed" | "returned" | "completed";
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["AssignmentDashboard"][];
                        next_cursor: string;
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
    selfAssignmentSummary: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                    "application/json": components["schemas"]["AssignmentSummary"];
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
    getAssignmentRecipient: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["AssignmentRecipient"];
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
    listLearningSubmissions: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                        items: components["schemas"]["LearningSubmission"][];
                        next_cursor: string;
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
    saveLearningSubmission: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "Idempotency-Key": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SubmissionInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LearningSubmission"];
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
    listLearningFeedback: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                        items: components["schemas"]["LearningFeedback"][];
                        next_cursor: string;
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
    createLearningFeedback: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "Idempotency-Key": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LearningFeedbackInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LearningFeedback"];
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
    extendAssignmentDeadline: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AccommodationInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AssignmentRecipient"];
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
    listGradingPolicies: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                q?: string;
                program_id?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["AssessmentPolicy"][];
                        next_cursor: string;
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
    createGradingPolicy: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AssessmentPolicyInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AssessmentPolicy"];
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
    getGradingPolicy: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["AssessmentPolicy"];
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
    listReportingPeriods: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                academic_year_id?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["ReportingPeriod"][];
                        next_cursor: string;
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
    createReportingPeriod: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReportingPeriodInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ReportingPeriod"];
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
    transitionReportingPeriod: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PeriodTransition"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ReportingPeriod"];
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
    listAssessments: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                q?: string;
                course_id?: string;
                period_id?: string;
                section_id?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["Assessment"][];
                        next_cursor: string;
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
    createAssessment: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AssessmentInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Assessment"];
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
    getAssessment: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["Assessment"];
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
    editAssessment: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AssessmentInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Assessment"];
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
    publishAssessment: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["Assessment"];
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
    listAssessmentGrades: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                        items: components["schemas"]["AssessmentGrade"][];
                        next_cursor: string;
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
    bulkCreateGrades: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GradeBulkInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Assessment"];
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
    editDraftGrade: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AcademicGradeInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AssessmentGrade"];
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
    transitionGrade: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GradeTransition"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AssessmentGrade"];
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
    amendPublishedGrade: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GradeAmendmentInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AssessmentGrade"];
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
    gradeHistory: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                        items: components["schemas"]["GradeHistory"][];
                        next_cursor: string;
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
    teacherGradebook: {
        parameters: {
            query: {
                after?: string;
                limit?: number;
                q?: string;
                period_id: string;
                course_id: string;
                section_id?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["GradebookStudent"][];
                        next_cursor: string;
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
    academicSummary: {
        parameters: {
            query: {
                after?: string;
                limit?: number;
                period_id: string;
                course_id?: string;
                section_id?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["GradebookStudent"][];
                        next_cursor: string;
                    } | {
                        items: components["schemas"]["AcademicCourseSummary"][];
                        next_cursor: string;
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
    studentPublishedGradeHistory: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                period_id?: string;
                course_id?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                        items: components["schemas"]["PortalGrade"][];
                        next_cursor: string;
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
    studentAcademicProgress: {
        parameters: {
            query: {
                period_id: string;
                course_id: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["AcademicProgress"];
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
    studentReportCards: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                period_id?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                        items: components["schemas"]["ReportCard"][];
                        next_cursor: string;
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
    selfPublishedGradeHistory: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                period_id?: string;
                course_id?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["PortalGrade"][];
                        next_cursor: string;
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
    selfAcademicProgress: {
        parameters: {
            query: {
                period_id: string;
                course_id: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                    "application/json": components["schemas"]["AcademicProgress"];
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
    selfReportCards: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                period_id?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["ReportCard"][];
                        next_cursor: string;
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
    listProgressComments: {
        parameters: {
            query: {
                after?: string;
                limit?: number;
                period_id: string;
                course_id: string;
                student_id?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["ProgressComment"][];
                        next_cursor: string;
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
    createProgressComment: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ProgressCommentInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProgressComment"];
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
    editProgressComment: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ProgressCommentInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProgressComment"];
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
    listReportDefinitions: {
        parameters: {
            query: {
                after?: string;
                limit?: number;
                period_id: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["ReportDefinition"][];
                        next_cursor: string;
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
    createReportDefinition: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReportDefinitionInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ReportDefinition"];
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
    listReportCards: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                student_id?: string;
                period_id?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["ReportCard"][];
                        next_cursor: string;
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
    createReportCard: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReportCardInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ReportCard"];
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
    getReportCard: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["ReportCard"];
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
    transitionReportCard: {
        parameters: {
            query?: never;
            header: {
                "If-Match": string;
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReportTransition"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ReportCard"];
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
    reportCardHistory: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                        items: components["schemas"]["ReportHistory"][];
                        next_cursor: string;
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
    managementOverview: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                    "application/json": components["schemas"]["ManagementOverview"];
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
    managementStudents: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                q?: string;
                status?: "none" | "pending" | "active" | "withdrawn" | "completed" | "cancelled";
                campus_id?: string;
                section_id?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["ManagementStudent"][];
                        next_cursor: string;
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
    managementStudentContext: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["ManagementContext"];
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
    managementSearch: {
        parameters: {
            query: {
                after?: string;
                limit?: number;
                q: string;
                kind: "students" | "teachers" | "classes";
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["ManagementSearchResult"][];
                        next_cursor: string;
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
    managementStudentAssignments: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                starts_on?: string;
                ends_on?: string;
                status?: "draft" | "scheduled" | "published" | "closed" | "archived";
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                        items: components["schemas"]["AssignmentDashboard"][];
                        next_cursor: string;
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
    teachingClasses: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                q?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                        items: components["schemas"]["TeachingClass"][];
                        next_cursor: string;
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
    teachingRoster: {
        parameters: {
            query: {
                after?: string;
                limit?: number;
                q?: string;
                section_id: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                        items: components["schemas"]["TeachingStudent"][];
                        next_cursor: string;
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
    teacherCommunicationContacts: {
        parameters: {
            query: {
                student_id: string;
                after?: string;
                limit?: number;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["CommunicationContact"][];
                        next_cursor: string;
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
    assessmentRoster: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                q?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                        items: components["schemas"]["AssessmentRosterStudent"][];
                        next_cursor: string;
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
    guardianFamilyChildren: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
                q?: string;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                        items: components["schemas"]["FamilyChild"][];
                        next_cursor: string;
                        /** Format: date */
                        local_date: string;
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
    guardianChildContext: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                    "application/json": components["schemas"]["FamilyContext"];
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
    guardianProfileView: {
        parameters: {
            query?: never;
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
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
                    "application/json": components["schemas"]["GuardianProfileView"];
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
    guardianTeacherContacts: {
        parameters: {
            query?: {
                after?: string;
                limit?: number;
            };
            header?: {
                "X-SchoolPilot-Workspace"?: "teacher" | "guardian" | "student" | "management";
            };
            path: {
                id: string;
            };
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
                        items: components["schemas"]["GuardianTeacherContact"][];
                        next_cursor: string;
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
