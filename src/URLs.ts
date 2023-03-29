// Taken directly from myslt.slt.lk
export const BASE_URL = 'https://omniscapp.slt.lk/mobitelint/slt/api/'

export const BILL_PAY = "https://billpay.slt.lk/";

export const firebaseID = '123123123'
export const refreshTokenUrl = BASE_URL + "Account/RefreshToken"
export const externalLoginUrl = BASE_URL + "Account/LoginExternal";
export const loginUrl = BASE_URL + "Account/Login";
export const signUpUrl = BASE_URL + "Account/RegisterV2"
export const otpResendUrl = BASE_URL + "Account/ResendOTPV2";
export const otpAuthenticateUrl = BASE_URL + "Account/OTPAuthRequest";
export const forgotPasswordAuthenticateUrl = BASE_URL + "Account/ForgotPassword";
export const getAddCategoryUrl = BASE_URL + "Banner/BannerDetailRequest?";
export const getbannerImagesUrl = 'https://bannerportal.slt.lk/API/getBannerUrls';

// Account details
export const getAccountDetailsUrl = BASE_URL + "AccountOMNI/GetAccountDetailRequest?";
export const getServiceDetailRequestUrl = BASE_URL + "AccountOMNI/GetServiceDetailRequest?";
export const billDetailsUrl = BASE_URL + "AccountOMNI/BillPaymentRequest?"
export const getUsageSummaryUrl = BASE_URL + "BBVAS/UsageSummary?";
export const getProfileRequestUrl = BASE_URL + "VAS/GetProfileRequest?";
export const addAccountUrl = BASE_URL + "AccountOMNI/AddAccountRequest?";
export const addVasAccountUrl = BASE_URL + "AccountOMNI/VASAccountRequest?";
export const getSubmitClaimUrl = BASE_URL + "BBVAS/UpgradeLoyalty?";
export const getVASBundleUnsubscriptionUrl = BASE_URL + "BBVAS/VASBundleUnsubscription?";

// VASUsage
export const getExtraGBUrl = BASE_URL + "BBVAS/ExtraGB?";
export const getBonusDataUrl = BASE_URL + "BBVAS/BonusData?";
export const getAddonsDataUrl = BASE_URL + "BBVAS/GetDashboardVASBundles?";
export const getFreeDataUrl = BASE_URL + "BBVAS/FreeData?";

export const getValidateDataGiftSubUrl = BASE_URL + "BBVAS/ValidateDataGiftSub?";

//bbHistory
export const getHistoryGBDetailsUrl = BASE_URL + "BBVAS/GetPurchaseHistory?";

//bbDailyUsage
export const getCurrentMonthsDailyUsageUrl = BASE_URL + "BBVAS/EnhancedCurrentDailyUsage?";
export const getPreviousMonthsDailyUsageUrl = BASE_URL + "BBVAS/EnhancedPreviousDailyUsage?";
export const purchaseProtocolReportUrl = BASE_URL + "BBVAS/PurchaseAdvancedReportsPostPaid?";
export const UnsubscribeAdvancedReportsUrl = BASE_URL + "BBVAS/UnsubscribeAdvancedReports?";

export const getProtocolReportUrl = BASE_URL + "BBVAS/ProtocolReport?";

//get addon list DataUrl
export const getAddonListDataUrl = BASE_URL + "BBVAS/GetVASDataBundlePackages?";
export const getAddVASDataBundlePostPaidUrl = BASE_URL + "BBVAS/AddVASDataBundlePostPaid?";


export const getAddVASDataBundlePostPaidV2Url = BASE_URL + "BBVAS/AddVASDataBundlePostPaidV2?";

//service related upgrade package
export const getBBPackageComparisonUrl = BASE_URL + "BBExternal/GetBBPackagesV2?";
export const getCurrentBBPackageUrl = BASE_URL + "BBExternal/GetCurrentBBPackageV2?";
export const BBPackageChangeRequest = BASE_URL + "BBExternal/BBPackageChangeRequest?";

//getExtraGb Details
export const getExtraGBDetailsUrl = BASE_URL + "BBVAS/GetExtraGBPackages?";
export const getExtraGBPostPaidUrl = BASE_URL + "BBVAS/PurchaseExtraGBPostpaid?";

//bill history
export const getBillHistoryRequestUrl = BASE_URL + "AccountOMNI/BillHistoryRequestV2?";
