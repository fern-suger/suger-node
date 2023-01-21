/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { SugerApi } from "@fern-api/suger";
import * as core from "../../../../core";

export const EntitlementInfo: core.serialization.ObjectSchema<
    serializers.EntitlementInfo.Raw,
    SugerApi.EntitlementInfo
> = core.serialization.object({
    autoRenew: core.serialization.boolean().optional(),
    awsEntitlements: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).Entitlement))
        .optional(),
    azureSubscriptions: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).AzureMarketplaceSubscription))
        .optional(),
    collectableAmount: core.serialization.number().optional(),
    commits: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).CommitDimension))
        .optional(),
    currency: core.serialization.string().optional(),
    dimensions: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).MeteringDimension))
        .optional(),
    disbursedAmount: core.serialization.number().optional(),
    discount: core.serialization.number().optional(),
    eulaType: core.serialization.string().optional(),
    eulaUrl: core.serialization.string().optional(),
    gcpEntitlements: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).GcpMarketplaceEntitlement))
        .optional(),
    gcpPlans: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).GcpPurchasePlan))
        .optional(),
    invoicedAmount: core.serialization.number().optional(),
    paymentInstallments: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).PaymentInstallment))
        .optional(),
    refundCancelationPolicy: core.serialization.string().optional(),
    sellerNotes: core.serialization.string().optional(),
});

export declare namespace EntitlementInfo {
    interface Raw {
        autoRenew?: boolean | null;
        awsEntitlements?: serializers.Entitlement.Raw[] | null;
        azureSubscriptions?: serializers.AzureMarketplaceSubscription.Raw[] | null;
        collectableAmount?: number | null;
        commits?: serializers.CommitDimension.Raw[] | null;
        currency?: string | null;
        dimensions?: serializers.MeteringDimension.Raw[] | null;
        disbursedAmount?: number | null;
        discount?: number | null;
        eulaType?: string | null;
        eulaUrl?: string | null;
        gcpEntitlements?: serializers.GcpMarketplaceEntitlement.Raw[] | null;
        gcpPlans?: serializers.GcpPurchasePlan.Raw[] | null;
        invoicedAmount?: number | null;
        paymentInstallments?: serializers.PaymentInstallment.Raw[] | null;
        refundCancelationPolicy?: string | null;
        sellerNotes?: string | null;
    }
}