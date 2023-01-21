/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const AzureProductVariantCustomMeter: core.serialization.ObjectSchema<
    serializers.AzureProductVariantCustomMeter.Raw,
    SugerApi.AzureProductVariantCustomMeter
> = core.serialization.object({
    displayName: core.serialization.string().optional(),
    id: core.serialization.string().optional(),
    includedBaseQuantities: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).IncludedBaseQuantity))
        .optional(),
    isEnabled: core.serialization.boolean().optional(),
    priceInUsd: core.serialization.number().optional(),
    uniqueId: core.serialization.property("uniqueID", core.serialization.string().optional()),
    unitOfMeasure: core.serialization.string().optional(),
});

export declare namespace AzureProductVariantCustomMeter {
    interface Raw {
        displayName?: string | null;
        id?: string | null;
        includedBaseQuantities?: serializers.IncludedBaseQuantity.Raw[] | null;
        isEnabled?: boolean | null;
        priceInUsd?: number | null;
        uniqueID?: string | null;
        unitOfMeasure?: string | null;
    }
}
