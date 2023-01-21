/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SugerApi } from "@fern-api/suger";

export interface AzureProductAvailability {
    emailAudiences?: SugerApi.AzureAudience[];
    enterpriseLicensing?: string;
    id?: string;
    resourceType?: string;
    subscriptionAudiences?: SugerApi.AzureAudience[];
    visibility?: string;
}