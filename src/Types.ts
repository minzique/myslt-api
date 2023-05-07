// we don't use this, keeping it here as a reference
export interface BaseAPIRespose {
  isSuccess: boolean;
  errorMessege?: string;
  exceptionDetail?: unknown;
  dataBundle?: {};
  errorShow?: string;
  errorCode?: unknown;
}

export interface AccountDetails {
  accountno: string;
  telephoneno: string;
  status: string;
}
// export interface AccountList extends Array<AccountDetails> {}

export interface ServiceDetails {
  serviceID: string; // subscriberID
  packageName: string;
  serviceStatus: string;
  serviceType: string;
  updatedDTM?: string;
}
export interface ServiceDetailsResponse {
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
export interface BBSummaryResponse {
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
export interface VASUsageResponse {
  package_name?: string;
  package_summary?: DataSummary;
  usageDetails: UsageDetails[];
  reported_time: string;
}
export interface PaymentDetails {
  billAmount: string;
  lastBillDate: string;
  paymentDueDate: string;
  lastPaymentDate?: string;
  lastPaymentAmount?: string;
  outstandingBalance?: string;
}
export interface PaymentDetailsResponse {
  listofbillingInquiryType?: PaymentDetails[];
}
export interface UserPrivileges {
  usage: boolean;
  extra_gb: boolean;
  purchase_history: boolean;
  profile: boolean;
  protocol_report: boolean;
  purchase_protocol_report: boolean;
  promo_code: boolean;
  data_gifting: boolean;
  data_transfer: boolean;
  data_addons: boolean;
  free_data: boolean;
  bonus_data: boolean;
  happy_day: boolean;
}
export interface UserProfile {
  subscriberid: string;
  fullname: string;
  subscriber_package: string;
  subscriber_package_display: string;
  subscriber_package_type: number;
  email: string;
  phone: string;
  first_bill_date: string;
  billing_date: string;
  blocked: boolean;
  registered: boolean;
  // it's their typo ¯\_(ツ)_/¯
  priviledges: UserPrivileges;
  happy_day?: unknown;
}

export interface BillDetails {
  billMonth: string;
  billValue: string;
  payments: string;
  outstanding: string;
  eBillAvailability: string;
  billCode: string;
  billViewMonth: string;
}

export interface BillHistoryReponse {
  listofBillHistoryDetail?: BillDetails[];
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}
export interface UserConfig {
  username: string | null;
  password?: string;
  creds?: AuthTokens;
  accountDetails?: AccountDetails;
  serviceDetails?: ServiceDetails;
}