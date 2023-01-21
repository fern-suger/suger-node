/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const GcpIntegration: core.serialization.ObjectSchema<serializers.GcpIntegration.Raw, SugerApi.GcpIntegration> =
    core.serialization.object({
        gcpProjectId: core.serialization.string().optional(),
        gcpProjectNumber: core.serialization.string().optional(),
        identityProviderId: core.serialization.string().optional(),
        partnerId: core.serialization.string().optional(),
        pubsubTopic: core.serialization.string().optional(),
        reportBucket: core.serialization.string().optional(),
        reportFullSyncDone: core.serialization.boolean().optional(),
        reportStartDate: core.serialization.string().optional(),
        serviceAccountEmail: core.serialization.string().optional(),
        serviceNames: core.serialization.list(core.serialization.string()).optional(),
        workloadIdentityPoolId: core.serialization.string().optional(),
    });

export declare namespace GcpIntegration {
    interface Raw {
        gcpProjectId?: string | null;
        gcpProjectNumber?: string | null;
        identityProviderId?: string | null;
        partnerId?: string | null;
        pubsubTopic?: string | null;
        reportBucket?: string | null;
        reportFullSyncDone?: boolean | null;
        reportStartDate?: string | null;
        serviceAccountEmail?: string | null;
        serviceNames?: string[] | null;
        workloadIdentityPoolId?: string | null;
    }
}
