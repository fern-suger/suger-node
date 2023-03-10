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

    public async getAll(orgId: string): Promise<SugerApi.IdentityBuyer[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SugerApiEnvironment.Production,
                `/org/${orgId}/buyer`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.buyer.getAll.Response.parse(
                _response.body as serializers.buyer.getAll.Response.Raw
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

    public async get(orgId: string, buyerId: string): Promise<SugerApi.IdentityBuyer> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SugerApiEnvironment.Production,
                `/org/${orgId}/buyer/${buyerId}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.buyer.get.Response.parse(_response.body as serializers.buyer.get.Response.Raw);
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

    public async update(
        orgId: string,
        buyerId: string,
        request: SugerApi.UpdateBuyerNameDescriptionParams
    ): Promise<SugerApi.IdentityBuyer> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SugerApiEnvironment.Production,
                `/org/${orgId}/buyer/${buyerId}`
            ),
            method: "PATCH",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.buyer.update.Request.json(request),
        });
        if (_response.ok) {
            return await serializers.buyer.update.Response.parse(
                _response.body as serializers.buyer.update.Response.Raw
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
