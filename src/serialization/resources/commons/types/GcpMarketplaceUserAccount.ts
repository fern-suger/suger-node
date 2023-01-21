/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const GcpMarketplaceUserAccount: core.serialization.ObjectSchema<
    serializers.GcpMarketplaceUserAccount.Raw,
    SugerApi.GcpMarketplaceUserAccount
> = core.serialization.object({
    approvals: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).GcpMarketplaceUserAccountApproval))
        .optional(),
    createTime: core.serialization.string().optional(),
    id: core.serialization.string().optional(),
    inputProperties: core.serialization.list(core.serialization.number()).optional(),
    name: core.serialization.string().optional(),
    provider: core.serialization.string().optional(),
    state: core.serialization.string().optional(),
    updateTime: core.serialization.string().optional(),
    userInfo: core.serialization.lazyObject(async () => (await import("../../..")).GcpUserInfo).optional(),
});

export declare namespace GcpMarketplaceUserAccount {
    interface Raw {
        approvals?: serializers.GcpMarketplaceUserAccountApproval.Raw[] | null;
        createTime?: string | null;
        id?: string | null;
        inputProperties?: number[] | null;
        name?: string | null;
        provider?: string | null;
        state?: string | null;
        updateTime?: string | null;
        userInfo?: serializers.GcpUserInfo.Raw | null;
    }
}
