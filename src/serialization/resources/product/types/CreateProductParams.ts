/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const CreateProductParams: core.serialization.ObjectSchema<
    serializers.CreateProductParams.Raw,
    SugerApi.CreateProductParams
> = core.serialization.object({
    externalId: core.serialization.property("externalID", core.serialization.string().optional()),
    fulfillmentUrl: core.serialization.string().optional(),
    id: core.serialization.string().optional(),
    info: core.serialization.lazyObject(async () => (await import("../../..")).ProductInfo).optional(),
    name: core.serialization.string().optional(),
    organizationId: core.serialization.property("organizationID", core.serialization.string().optional()),
    partner: core.serialization.string().optional(),
    productType: core.serialization.string().optional(),
    service: core.serialization.string().optional(),
    status: core.serialization.string().optional(),
});

export declare namespace CreateProductParams {
    interface Raw {
        externalID?: string | null;
        fulfillmentUrl?: string | null;
        id?: string | null;
        info?: serializers.ProductInfo.Raw | null;
        name?: string | null;
        organizationID?: string | null;
        partner?: string | null;
        productType?: string | null;
        service?: string | null;
        status?: string | null;
    }
}