/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { SugerApi } from "@fern-api/suger";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.SugerApiEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Get the Bearer Access Token by giving the Suger API Client ID & Client Secret.
     */
    public async getBearerToken(
        request: SugerApi.GetApiClientAccessTokenParams
    ): Promise<SugerApi.ApiClientAccessToken> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SugerApiEnvironment.Production,
                "/public/apiClient/accessToken"
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.apiAuth.getBearerToken.Request.json(request),
        });
        if (_response.ok) {
            return await serializers.apiAuth.getBearerToken.Response.parse(
                _response.body as serializers.apiAuth.getBearerToken.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SugerApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SugerApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SugerApiTimeoutError();
            case "unknown":
                throw new errors.SugerApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
