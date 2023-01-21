/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const Status: core.serialization.ObjectSchema<serializers.Status.Raw, SugerApi.Status> =
    core.serialization.object({
        code: core.serialization.number().optional(),
        details: core.serialization.list(core.serialization.list(core.serialization.number())).optional(),
        message: core.serialization.string().optional(),
    });

export declare namespace Status {
    interface Raw {
        code?: number | null;
        details?: number[][] | null;
        message?: string | null;
    }
}
