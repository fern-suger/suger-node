/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const IntegrationInfo: core.serialization.ObjectSchema<
    serializers.IntegrationInfo.Raw,
    SugerApi.IntegrationInfo
> = core.serialization.object({
    awsIntegration: core.serialization.lazyObject(async () => (await import("../../..")).AwsIntegration).optional(),
    azureIntegration: core.serialization.lazyObject(async () => (await import("../../..")).AzureIntegration).optional(),
    gcpIntegration: core.serialization.lazyObject(async () => (await import("../../..")).GcpIntegration).optional(),
});

export declare namespace IntegrationInfo {
    interface Raw {
        awsIntegration?: serializers.AwsIntegration.Raw | null;
        azureIntegration?: serializers.AzureIntegration.Raw | null;
        gcpIntegration?: serializers.GcpIntegration.Raw | null;
    }
}
