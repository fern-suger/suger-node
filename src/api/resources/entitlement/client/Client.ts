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
     * Add Credit Amount to the given Entitlement. The credit amount is accumulated & saved in the current Entitlement Term of the gvien Entitlement.
     */
    public async addEntitlementCredit(
        orgId: string,
        request: SugerApi.AddEntitlementCreditParams
    ): Promise<SugerApi.AddEntitlementCreditResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SugerApiEnvironment.Production,
                `/org/${orgId}/addEntitlementCredit`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.entitlement.addEntitlementCredit.Request.json(request),
        });
        if (_response.ok) {
            return await serializers.entitlement.addEntitlementCredit.Response.parse(
                _response.body as serializers.entitlement.addEntitlementCredit.Response.Raw
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

    public async getForBuyer(orgId: string, buyerId: string): Promise<SugerApi.WorkloadEntitlement[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SugerApiEnvironment.Production,
                `/org/${orgId}/buyer/${buyerId}/entitlement`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.entitlement.getForBuyer.Response.parse(
                _response.body as serializers.entitlement.getForBuyer.Response.Raw
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

    public async getAll(orgId: string): Promise<SugerApi.WorkloadEntitlement[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SugerApiEnvironment.Production,
                `/org/${orgId}/entitlement`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.entitlement.getAll.Response.parse(
                _response.body as serializers.entitlement.getAll.Response.Raw
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

    public async get(orgId: string, entitlementId: string): Promise<SugerApi.WorkloadEntitlement> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SugerApiEnvironment.Production,
                `/org/${orgId}/entitlement/${entitlementId}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.entitlement.get.Response.parse(
                _response.body as serializers.entitlement.get.Response.Raw
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

    public async updateName(
        orgId: string,
        entitlementId: string,
        request: SugerApi.UpdateEntitlementNameParams
    ): Promise<SugerApi.WorkloadEntitlement> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SugerApiEnvironment.Production,
                `/org/${orgId}/entitlement/${entitlementId}/entitlementName`
            ),
            method: "PATCH",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.entitlement.updateName.Request.json(request),
        });
        if (_response.ok) {
            return await serializers.entitlement.updateName.Response.parse(
                _response.body as serializers.entitlement.updateName.Response.Raw
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

    public async getForOffer(orgId: string, offerId: string): Promise<SugerApi.WorkloadEntitlement[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SugerApiEnvironment.Production,
                `/org/${orgId}/offer/${offerId}/entitlement`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.entitlement.getForOffer.Response.parse(
                _response.body as serializers.entitlement.getForOffer.Response.Raw
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

    public async getForPartner(orgId: string, partner: string): Promise<SugerApi.WorkloadEntitlement[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SugerApiEnvironment.Production,
                `/org/${orgId}/partner/${partner}/entitlement`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.entitlement.getForPartner.Response.parse(
                _response.body as serializers.entitlement.getForPartner.Response.Raw
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

    public async getForProduct(orgId: string, productId: string): Promise<SugerApi.WorkloadEntitlement[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.SugerApiEnvironment.Production,
                `/org/${orgId}/product/${productId}/entitlement`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.entitlement.getForProduct.Response.parse(
                _response.body as serializers.entitlement.getForProduct.Response.Raw
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
