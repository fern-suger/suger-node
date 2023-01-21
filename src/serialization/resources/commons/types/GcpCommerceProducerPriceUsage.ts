/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const GcpCommerceProducerPriceUsage: core.serialization.ObjectSchema<
    serializers.GcpCommerceProducerPriceUsage.Raw,
    SugerApi.GcpCommerceProducerPriceUsage
> = core.serialization.object({
    displayQuantity: core.serialization.number().optional(),
    metricId: core.serialization.string().optional(),
    priceTiers: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).GcpCommerceProducerPriceTier))
        .optional(),
    taxCategoryOverride: core.serialization.string().optional(),
});

export declare namespace GcpCommerceProducerPriceUsage {
    interface Raw {
        displayQuantity?: number | null;
        metricId?: string | null;
        priceTiers?: serializers.GcpCommerceProducerPriceTier.Raw[] | null;
        taxCategoryOverride?: string | null;
    }
}