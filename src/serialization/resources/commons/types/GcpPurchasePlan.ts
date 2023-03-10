/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const GcpPurchasePlan: core.serialization.ObjectSchema<
    serializers.GcpPurchasePlan.Raw,
    SugerApi.GcpPurchasePlan
> = core.serialization.object({
    name: core.serialization.string().optional(),
    priceInfo: core.serialization
        .lazyObject(async () => (await import("../../..")).GcpCommerceProducerPriceInfo)
        .optional(),
    purchaseMode: core.serialization.string().optional(),
    title: core.serialization.string().optional(),
});

export declare namespace GcpPurchasePlan {
    interface Raw {
        name?: string | null;
        priceInfo?: serializers.GcpCommerceProducerPriceInfo.Raw | null;
        purchaseMode?: string | null;
        title?: string | null;
    }
}
