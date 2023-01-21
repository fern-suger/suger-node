/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const AzureProductPackageConfiguration: core.serialization.ObjectSchema<
    serializers.AzureProductPackageConfiguration.Raw,
    SugerApi.AzureProductPackageConfiguration
> = core.serialization.object({
    azureActiveDirectoryApplicationId: core.serialization.property(
        "azureActiveDirectoryApplicationID",
        core.serialization.string().optional()
    ),
    azureActiveDirectoryTenantId: core.serialization.property(
        "azureActiveDirectoryTenantID",
        core.serialization.string().optional()
    ),
    connectionWebhook: core.serialization.string().optional(),
    id: core.serialization.string().optional(),
    landingPageUri: core.serialization.string().optional(),
    resourceType: core.serialization.string().optional(),
});

export declare namespace AzureProductPackageConfiguration {
    interface Raw {
        azureActiveDirectoryApplicationID?: string | null;
        azureActiveDirectoryTenantID?: string | null;
        connectionWebhook?: string | null;
        id?: string | null;
        landingPageUri?: string | null;
        resourceType?: string | null;
    }
}
