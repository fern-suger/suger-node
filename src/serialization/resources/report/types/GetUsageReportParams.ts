/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const GetUsageReportParams: core.serialization.ObjectSchema<
    serializers.GetUsageReportParams.Raw,
    SugerApi.GetUsageReportParams
> = core.serialization.object({
    entitlementId: core.serialization.property("entitlementID", core.serialization.string()),
    organizationId: core.serialization.property("organizationID", core.serialization.string()),
});

export declare namespace GetUsageReportParams {
    interface Raw {
        entitlementID: string;
        organizationID: string;
    }
}