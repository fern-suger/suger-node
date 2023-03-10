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

    public async getAllForCloudPartner(orgId: string, partner: string): Promise<SugerApi.WorkloadProduct[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SugerApiEnvironment.Production,
                `/org/${orgId}/partner/${partner}/product`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.product.getAllForCloudPartner.Response.parse(
                _response.body as serializers.product.getAllForCloudPartner.Response.Raw
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

    public async getAll(orgId: string): Promise<SugerApi.WorkloadProduct[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SugerApiEnvironment.Production,
                `/org/${orgId}/product`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.product.getAll.Response.parse(
                _response.body as serializers.product.getAll.Response.Raw
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

    public async create(orgId: string, request: SugerApi.CreateProductParams): Promise<SugerApi.WorkloadProduct> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SugerApiEnvironment.Production,
                `/org/${orgId}/product`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.product.create.Request.json(request),
        });
        if (_response.ok) {
            return await serializers.product.create.Response.parse(
                _response.body as serializers.product.create.Response.Raw
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

    public async get(orgId: string, productId: string): Promise<SugerApi.WorkloadProduct> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SugerApiEnvironment.Production,
                `/org/${orgId}/product/${productId}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.product.get.Response.parse(_response.body as serializers.product.get.Response.Raw);
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

    /**
     * Currently only the product with status = "CREATE_PENDING" or "CREATE_FAILED" is allowed to be deleted.
     */
    public async delete(orgId: string, productId: string): Promise<string> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SugerApiEnvironment.Production,
                `/org/${orgId}/product/${productId}`
            ),
            method: "DELETE",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.product.delete.Response.parse(
                _response.body as serializers.product.delete.Response.Raw
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

    public async update(
        orgId: string,
        productId: string,
        request: SugerApi.UpdateProductParams
    ): Promise<SugerApi.WorkloadProduct> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SugerApiEnvironment.Production,
                `/org/${orgId}/product/${productId}`
            ),
            method: "PATCH",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.product.update.Request.json(request),
        });
        if (_response.ok) {
            return await serializers.product.update.Response.parse(
                _response.body as serializers.product.update.Response.Raw
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

    public async getMeteringDimensions(orgId: string, productId: string): Promise<SugerApi.AwsSaasProductDimension[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SugerApiEnvironment.Production,
                `/org/${orgId}/product/${productId}/dimension`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.product.getMeteringDimensions.Response.parse(
                _response.body as serializers.product.getMeteringDimensions.Response.Raw
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
