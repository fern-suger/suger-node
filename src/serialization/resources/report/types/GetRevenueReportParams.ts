/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const GetRevenueReportParams: core.serialization.ObjectSchema<
    serializers.GetRevenueReportParams.Raw,
    SugerApi.GetRevenueReportParams
> = core.serialization.object({
    buyerId: core.serialization.property("buyerID", core.serialization.string().optional()),
    entitlementId: core.serialization.property("entitlementID", core.serialization.string().optional()),
    organizationId: core.serialization.property("organizationID", core.serialization.string()),
    partner: core.serialization.string(),
    productId: core.serialization.property("productID", core.serialization.string().optional()),
    reportType: core.serialization.string(),
    service: core.serialization.string(),
});

export declare namespace GetRevenueReportParams {
    interface Raw {
        buyerID?: string | null;
        entitlementID?: string | null;
        organizationID: string;
        partner: string;
        productID?: string | null;
        reportType: string;
        service: string;
    }
}
