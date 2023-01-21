/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const UsageEventConflictResponse: core.serialization.ObjectSchema<
    serializers.UsageEventConflictResponse.Raw,
    SugerApi.UsageEventConflictResponse
> = core.serialization.object({
    additionalInfo: core.serialization
        .lazyObject(async () => (await import("../../..")).UsageEventConflictResponseAdditionalInfo)
        .optional(),
    code: core.serialization.string().optional(),
    message: core.serialization.string().optional(),
});

export declare namespace UsageEventConflictResponse {
    interface Raw {
        additionalInfo?: serializers.UsageEventConflictResponseAdditionalInfo.Raw | null;
        code?: string | null;
        message?: string | null;
    }
}