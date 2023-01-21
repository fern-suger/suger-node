/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const GcpCommerceProducerListingSpec: core.serialization.ObjectSchema<
    serializers.GcpCommerceProducerListingSpec.Raw,
    SugerApi.GcpCommerceProducerListingSpec
> = core.serialization.object({
    externalAccountSpec: core.serialization
        .lazyObject(async () => (await import("../../..")).GcpCommerceProducerExternalAccountSpec)
        .optional(),
    listingType: core.serialization.string().optional(),
    marketingSpec: core.serialization
        .lazyObject(async () => (await import("../../..")).GcpCommerceProducerMarketingSpec)
        .optional(),
    purchaseSpec: core.serialization
        .lazyObject(async () => (await import("../../..")).GcpCommerceProducerPurchaseSpec)
        .optional(),
});

export declare namespace GcpCommerceProducerListingSpec {
    interface Raw {
        externalAccountSpec?: serializers.GcpCommerceProducerExternalAccountSpec.Raw | null;
        listingType?: string | null;
        marketingSpec?: serializers.GcpCommerceProducerMarketingSpec.Raw | null;
        purchaseSpec?: serializers.GcpCommerceProducerPurchaseSpec.Raw | null;
    }
}