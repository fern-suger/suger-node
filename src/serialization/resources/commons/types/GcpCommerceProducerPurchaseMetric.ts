/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const GcpCommerceProducerPurchaseMetric: core.serialization.ObjectSchema<
    serializers.GcpCommerceProducerPurchaseMetric.Raw,
    SugerApi.GcpCommerceProducerPurchaseMetric
> = core.serialization.object({
    description: core.serialization.string().optional(),
    displayName: core.serialization.string().optional(),
    displayUnit: core.serialization.string().optional(),
    displayUnitDescription: core.serialization.string().optional(),
    id: core.serialization.string().optional(),
    metricKind: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    reportingUnit: core.serialization.string().optional(),
    unit: core.serialization.string().optional(),
    valueType: core.serialization.string().optional(),
});

export declare namespace GcpCommerceProducerPurchaseMetric {
    interface Raw {
        description?: string | null;
        displayName?: string | null;
        displayUnit?: string | null;
        displayUnitDescription?: string | null;
        id?: string | null;
        metricKind?: string | null;
        name?: string | null;
        reportingUnit?: string | null;
        unit?: string | null;
        valueType?: string | null;
    }
}