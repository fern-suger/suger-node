/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.metering.getUsageRecordReportsForEntitlement.Response.Raw,
    SugerApi.ListUsageRecordReportsResponse
> = core.serialization.lazyObject(async () => (await import("../../..")).ListUsageRecordReportsResponse);

export declare namespace Response {
    type Raw = serializers.ListUsageRecordReportsResponse.Raw;
}