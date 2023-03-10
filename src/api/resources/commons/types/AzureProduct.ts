/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SugerApi } from "@fern-api/suger";

export interface AzureProduct {
    availabilities?: SugerApi.AzureProductAvailability[];
    branches?: SugerApi.AzureProductBranch[];
    externalIDs?: SugerApi.TypeValue[];
    id?: string;
    isModularPublishing?: boolean;
    listings?: SugerApi.AzureProductListing[];
    name?: string;
    packageConfigurations?: SugerApi.AzureProductPackageConfiguration[];
    properties?: SugerApi.AzureProductProperty[];
    resourceType?: string;
    setup?: SugerApi.AzureProductSetup;
    submissions?: SugerApi.AzureProductSubmission[];
    variants?: SugerApi.AzureProductVariant[];
}
