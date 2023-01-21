/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<
    serializers.entitlement.updateName.Request.Raw,
    SugerApi.UpdateEntitlementNameParams
> = core.serialization.lazyObject(async () => (await import("../../..")).UpdateEntitlementNameParams);

export declare namespace Request {
    type Raw = serializers.UpdateEntitlementNameParams.Raw;
}

export const Response: core.serialization.Schema<
    serializers.entitlement.updateName.Response.Raw,
    SugerApi.WorkloadEntitlement
> = core.serialization.lazyObject(async () => (await import("../../..")).WorkloadEntitlement);

export declare namespace Response {
    type Raw = serializers.WorkloadEntitlement.Raw;
}