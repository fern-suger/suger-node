/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const AzurePriceCadence: core.serialization.ObjectSchema<
    serializers.AzurePriceCadence.Raw,
    SugerApi.AzurePriceCadence
> = core.serialization.object({
    type: core.serialization.string().optional(),
    value: core.serialization.number().optional(),
});

export declare namespace AzurePriceCadence {
    interface Raw {
        type?: string | null;
        value?: number | null;
    }
}
