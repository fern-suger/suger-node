/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const AwsSaasProduct: core.serialization.ObjectSchema<serializers.AwsSaasProduct.Raw, SugerApi.AwsSaasProduct> =
    core.serialization.object({
        description: core.serialization.property(
            "Description",
            core.serialization.lazyObject(async () => (await import("../../..")).AwsSaasProductDescription).optional()
        ),
        dimensions: core.serialization.property(
            "Dimensions",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).AwsSaasProductDimension))
                .optional()
        ),
        promotionalResources: core.serialization.property(
            "PromotionalResources",
            core.serialization
                .lazyObject(async () => (await import("../../..")).AwsSaasProductPromotionalResources)
                .optional()
        ),
        supportInformation: core.serialization.property(
            "SupportInformation",
            core.serialization
                .lazyObject(async () => (await import("../../..")).AwsSaasProductSupportInformation)
                .optional()
        ),
        versions: core.serialization.property(
            "Versions",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).AwsSaasProductVersion))
                .optional()
        ),
        dataFeedProductId: core.serialization.string().optional(),
        productId: core.serialization.string().optional(),
    });

export declare namespace AwsSaasProduct {
    interface Raw {
        Description?: serializers.AwsSaasProductDescription.Raw | null;
        Dimensions?: serializers.AwsSaasProductDimension.Raw[] | null;
        PromotionalResources?: serializers.AwsSaasProductPromotionalResources.Raw | null;
        SupportInformation?: serializers.AwsSaasProductSupportInformation.Raw | null;
        Versions?: serializers.AwsSaasProductVersion.Raw[] | null;
        dataFeedProductId?: string | null;
        productId?: string | null;
    }
}
