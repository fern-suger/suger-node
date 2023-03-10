/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const ProductInfo: core.serialization.ObjectSchema<serializers.ProductInfo.Raw, SugerApi.ProductInfo> =
    core.serialization.object({
        awsSaasProduct: core.serialization.lazyObject(async () => (await import("../../..")).AwsSaasProduct).optional(),
        awsSnsSubscriptions: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).AwsSnsSubscription))
            .optional(),
        azureProduct: core.serialization.lazyObject(async () => (await import("../../..")).AzureProduct).optional(),
        commits: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).CommitDimension))
            .optional(),
        currency: core.serialization.string().optional(),
        dimensions: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).MeteringDimension))
            .optional(),
        eulaUrl: core.serialization.string().optional(),
        gcpProduct: core.serialization.lazyObject(async () => (await import("../../..")).GcpProduct).optional(),
        refundCancelationPolicy: core.serialization.string().optional(),
        sellerNotes: core.serialization.string().optional(),
    });

export declare namespace ProductInfo {
    interface Raw {
        awsSaasProduct?: serializers.AwsSaasProduct.Raw | null;
        awsSnsSubscriptions?: serializers.AwsSnsSubscription.Raw[] | null;
        azureProduct?: serializers.AzureProduct.Raw | null;
        commits?: serializers.CommitDimension.Raw[] | null;
        currency?: string | null;
        dimensions?: serializers.MeteringDimension.Raw[] | null;
        eulaUrl?: string | null;
        gcpProduct?: serializers.GcpProduct.Raw | null;
        refundCancelationPolicy?: string | null;
        sellerNotes?: string | null;
    }
}
