/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SugerApi } from "@fern-api/suger";

export interface GcpCommerceProducerPriceSubscription {
    period?: string;
    price?: SugerApi.GcpCommerceProducerPrice;
    taxCategoryOverride?: string;
}