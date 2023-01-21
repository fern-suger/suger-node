/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SugerApi } from "@fern-api/suger";

export interface OfferInfo {
    azureProductVariant?: SugerApi.AzureProductVariant;
    baseAgreementId?: string;
    buyerAwsAccountIds?: string[];
    buyerAzureTenants?: SugerApi.AzureAudience[];
    commits?: SugerApi.CommitDimension[];
    currency?: string;
    dimensions?: SugerApi.MeteringDimension[];
    discount?: number;
    eulaType?: string;
    eulaUrl?: string;
    gcpMetrics?: SugerApi.GcpCommerceProducerPurchaseMetric[];
    gcpPlans?: SugerApi.GcpPurchasePlan[];
    isAgreementBasedOffer?: boolean;
    paymentInstallments?: SugerApi.PaymentInstallment[];
    refundCancelationPolicy?: string;
    sellerNotes?: string;
    visibility?: string;
}
