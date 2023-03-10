/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SugerApi } from "@fern-api/suger";

export interface MeteringUsageRecordReportInfo {
    awsMeteringResponse?: SugerApi.BatchMeterUsageOutput;
    azureMeteringResponse?: SugerApi.BatchUsageEventOkResponse;
    commitAmount?: number;
    creditAmount?: number;
    endTime?: string;
    gcpMeteringResponse?: SugerApi.ReportResponse;
    startTime?: string;
    usageRecordGroupIds?: string[];
    usedCommitAmount?: number;
    usedCommitAmountIncrement?: number;
    usedCreditAmount?: number;
    usedCreditAmountIncrement?: number;
}
