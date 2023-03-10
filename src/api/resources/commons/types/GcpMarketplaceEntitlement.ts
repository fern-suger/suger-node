/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SugerApi } from "@fern-api/suger";

export interface GcpMarketplaceEntitlement {
    account?: string;
    consumers?: SugerApi.GcpMarketplaceConsumer[];
    createTime?: string;
    id?: string;
    inputProperties?: number[];
    messageToUser?: string;
    name?: string;
    newOfferDuration?: string;
    newOfferEndTime?: string;
    newPendingOffer?: string;
    newPendingOfferDuration?: string;
    newPendingPlan?: string;
    newPlan?: string;
    offer?: string;
    offerDuration?: string;
    offerEndTime?: string;
    plan?: string;
    product?: string;
    productExternalName?: string;
    provider?: string;
    quoteExternalName?: string;
    state?: string;
    subscriptionEndTime?: string;
    updateTime?: string;
    usageReportingId?: string;
}
