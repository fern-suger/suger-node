/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const ListUsageRecordReportsResponse: core.serialization.ObjectSchema<
    serializers.ListUsageRecordReportsResponse.Raw,
    SugerApi.ListUsageRecordReportsResponse
> = core.serialization.object({
    usageRecordReports: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).MeteringUsageRecordReport))
        .optional(),
});

export declare namespace ListUsageRecordReportsResponse {
    interface Raw {
        usageRecordReports?: serializers.MeteringUsageRecordReport.Raw[] | null;
    }
}
