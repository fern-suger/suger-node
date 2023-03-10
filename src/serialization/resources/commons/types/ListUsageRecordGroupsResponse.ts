/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const ListUsageRecordGroupsResponse: core.serialization.ObjectSchema<
    serializers.ListUsageRecordGroupsResponse.Raw,
    SugerApi.ListUsageRecordGroupsResponse
> = core.serialization.object({
    nextOffset: core.serialization.number().optional(),
    usageRecordGroups: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).MeteringUsageRecordGroup))
        .optional(),
});

export declare namespace ListUsageRecordGroupsResponse {
    interface Raw {
        nextOffset?: number | null;
        usageRecordGroups?: serializers.MeteringUsageRecordGroup.Raw[] | null;
    }
}
