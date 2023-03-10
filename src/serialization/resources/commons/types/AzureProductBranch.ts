/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const AzureProductBranch: core.serialization.ObjectSchema<
    serializers.AzureProductBranch.Raw,
    SugerApi.AzureProductBranch
> = core.serialization.object({
    currentDraftInstanceId: core.serialization.property(
        "currentDraftInstanceID",
        core.serialization.string().optional()
    ),
    friendlyName: core.serialization.string().optional(),
    id: core.serialization.string().optional(),
    module: core.serialization.string().optional(),
    resourceType: core.serialization.string().optional(),
    type: core.serialization.string().optional(),
    variantId: core.serialization.property("variantID", core.serialization.string().optional()),
});

export declare namespace AzureProductBranch {
    interface Raw {
        currentDraftInstanceID?: string | null;
        friendlyName?: string | null;
        id?: string | null;
        module?: string | null;
        resourceType?: string | null;
        type?: string | null;
        variantID?: string | null;
    }
}
