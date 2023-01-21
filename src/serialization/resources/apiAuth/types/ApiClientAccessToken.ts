/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const ApiClientAccessToken: core.serialization.ObjectSchema<
    serializers.ApiClientAccessToken.Raw,
    SugerApi.ApiClientAccessToken
> = core.serialization.object({
    accessToken: core.serialization.property("access_token", core.serialization.string().optional()),
    expiresIn: core.serialization.property("expires_in", core.serialization.number().optional()),
    tokenType: core.serialization.property("token_type", core.serialization.string().optional()),
});

export declare namespace ApiClientAccessToken {
    interface Raw {
        access_token?: string | null;
        expires_in?: number | null;
        token_type?: string | null;
    }
}