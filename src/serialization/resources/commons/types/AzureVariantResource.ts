/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const AzureVariantResource: core.serialization.ObjectSchema<
    serializers.AzureVariantResource.Raw,
    SugerApi.AzureVariantResource
> = core.serialization.object({
    resources: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).TypeValue))
        .optional(),
    variantId: core.serialization.property("variantID", core.serialization.string().optional()),
});

export declare namespace AzureVariantResource {
    interface Raw {
        resources?: serializers.TypeValue.Raw[] | null;
        variantID?: string | null;
    }
}
