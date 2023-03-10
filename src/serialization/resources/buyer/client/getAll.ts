/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<serializers.buyer.getAll.Response.Raw, SugerApi.IdentityBuyer[]> =
    core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).IdentityBuyer));

export declare namespace Response {
    type Raw = serializers.IdentityBuyer.Raw[];
}
