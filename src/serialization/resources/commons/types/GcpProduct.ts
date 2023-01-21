/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const GcpProduct: core.serialization.ObjectSchema<serializers.GcpProduct.Raw, SugerApi.GcpProduct> =
    core.serialization.object({
        createTime: core.serialization.string().optional(),
        id: core.serialization.string().optional(),
        listingSpec: core.serialization
            .lazyObject(async () => (await import("../../..")).GcpCommerceProducerListingSpec)
            .optional(),
        marketplace: core.serialization.string().optional(),
        name: core.serialization.string().optional(),
        service: core.serialization.string().optional(),
        serviceConfig: core.serialization
            .lazyObject(async () => (await import("../../..")).GcpCommerceProducerServiceConfig)
            .optional(),
    });

export declare namespace GcpProduct {
    interface Raw {
        createTime?: string | null;
        id?: string | null;
        listingSpec?: serializers.GcpCommerceProducerListingSpec.Raw | null;
        marketplace?: string | null;
        name?: string | null;
        service?: string | null;
        serviceConfig?: serializers.GcpCommerceProducerServiceConfig.Raw | null;
    }
}