export interface AccountDetails {
    accountno: string;
    telephoneno: string;
    status: string;
}
export interface AccountList extends Array<AccountDetails> {}

export interface ServiceDetails {
    serviceID: string; // subscriberID
    packageName: string;
    serviceStatus: string;
    serviceType: string;
    updatedDTM?: string;
}

export interface ServiceList {
    accountNo: string;
    promotionName: string;
    accountCategory: string;
    contactNamewithInit?: string;
    contactMobile?: string;
    listofVoiceService?: ServiceDetails[];
    listofBBService?: ServiceDetails[];
    listofPEOService?: ServiceDetails[];
}

export interface UsageDetails {
    name: string;
    limit?: string;
    remaining?: string;
    used: string;
    percentage?: number;
    volume_unit: string;
    expiry_date: string;
    claim?: unknown;
    unsubscribable: boolean;
    timestamp: number;
    subscriptionid?: string;
}

export interface DataSummary {
    limit?: string;
    used?: string;
    volume_unit?: string;
}
export interface UsageSummaryResponse {
    status: string;
    reported_time: string;
    my_package_summary?: DataSummary;
    bonus_data_summary?: DataSummary;
    free_data_summary?: DataSummary;
    vas_data_summary?: DataSummary;
    extra_gb_data_summary?: DataSummary;
    my_package_info: {
        package_name: string;
        package_summary?: unknown; // probably `DataSummary` too
        usageDetails?: UsageDetails[];
        reported_time: string;
    };
}
// we don't use this, keeping it here as a reference
export interface BaseAPIRespose {
    isSuccess: boolean;
    errorMessege?: string;
    exceptionDetail?: unknown;
    dataBundle?: {};
    errorShow?: string;
    errorCode?: unknown;
}
