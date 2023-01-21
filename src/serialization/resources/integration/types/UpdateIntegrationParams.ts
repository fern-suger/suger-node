/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const UpdateIntegrationParams: core.serialization.ObjectSchema<
    serializers.UpdateIntegrationParams.Raw,
    SugerApi.UpdateIntegrationParams
> = core.serialization.object({
    info: core.serialization.lazyObject(async () => (await import("../../..")).IntegrationInfo),
    organizationId: core.serialization.property("organizationID", core.serialization.string()),
    partner: core.serialization.string(),
    service: core.serialization.string(),
});

export declare namespace UpdateIntegrationParams {
    interface Raw {
        info: serializers.IntegrationInfo.Raw;
        organizationID: string;
        partner: string;
        service: string;
    }
}
