/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const AzureProduct: core.serialization.ObjectSchema<serializers.AzureProduct.Raw, SugerApi.AzureProduct> =
    core.serialization.object({
        availabilities: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).AzureProductAvailability))
            .optional(),
        branches: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).AzureProductBranch))
            .optional(),
        externalIDs: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).TypeValue))
            .optional(),
        id: core.serialization.string().optional(),
        isModularPublishing: core.serialization.boolean().optional(),
        listings: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).AzureProductListing))
            .optional(),
        name: core.serialization.string().optional(),
        packageConfigurations: core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).AzureProductPackageConfiguration)
            )
            .optional(),
        properties: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).AzureProductProperty))
            .optional(),
        resourceType: core.serialization.string().optional(),
        setup: core.serialization.lazyObject(async () => (await import("../../..")).AzureProductSetup).optional(),
        submissions: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).AzureProductSubmission))
            .optional(),
        variants: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).AzureProductVariant))
            .optional(),
    });

export declare namespace AzureProduct {
    interface Raw {
        availabilities?: serializers.AzureProductAvailability.Raw[] | null;
        branches?: serializers.AzureProductBranch.Raw[] | null;
        externalIDs?: serializers.TypeValue.Raw[] | null;
        id?: string | null;
        isModularPublishing?: boolean | null;
        listings?: serializers.AzureProductListing.Raw[] | null;
        name?: string | null;
        packageConfigurations?: serializers.AzureProductPackageConfiguration.Raw[] | null;
        properties?: serializers.AzureProductProperty.Raw[] | null;
        resourceType?: string | null;
        setup?: serializers.AzureProductSetup.Raw | null;
        submissions?: serializers.AzureProductSubmission.Raw[] | null;
        variants?: serializers.AzureProductVariant.Raw[] | null;
    }
}
