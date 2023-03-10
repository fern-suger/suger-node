/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const Request: core.serialization.Schema<serializers.product.update.Request.Raw, SugerApi.UpdateProductParams> =
    core.serialization.lazyObject(async () => (await import("../../..")).UpdateProductParams);

export declare namespace Request {
    type Raw = serializers.UpdateProductParams.Raw;
}

export const Response: core.serialization.Schema<serializers.product.update.Response.Raw, SugerApi.WorkloadProduct> =
    core.serialization.lazyObject(async () => (await import("../../..")).WorkloadProduct);

export declare namespace Response {
    type Raw = serializers.WorkloadProduct.Raw;
}
