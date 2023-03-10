/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<
    serializers.entitlement.addEntitlementCredit.Request.Raw,
    SugerApi.AddEntitlementCreditParams
> = core.serialization.lazyObject(async () => (await import("../../..")).AddEntitlementCreditParams);

export declare namespace Request {
    type Raw = serializers.AddEntitlementCreditParams.Raw;
}

export const Response: core.serialization.Schema<
    serializers.entitlement.addEntitlementCredit.Response.Raw,
    SugerApi.AddEntitlementCreditResponse
> = core.serialization.lazyObject(async () => (await import("../../..")).AddEntitlementCreditResponse);

export declare namespace Response {
    type Raw = serializers.AddEntitlementCreditResponse.Raw;
}
