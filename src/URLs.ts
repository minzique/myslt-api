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

//update
export const putUpdateContacttUrl = BASE_URL + "BBVAS/UpdateContact?";
export const ChangeBBPassword = BASE_URL + "BBVAS/ChangeBBPassword?";

//User Complaints
export const getComplaintsListUrl = BASE_URL + "Fault/ViewFaultList?";
export const createFaultReques = BASE_URL + "Fault/CreateFaultRequest?";

//ebill
export const ebillActivateStatusUrl = BASE_URL + "ebill/eBillStatusRequest?";
export const ebillSmsActivateStatusUrl = BASE_URL + "ebill/SMSServiceStatusRequest?";
export const ebillCheckUserExistUrl = BASE_URL + "ebill/eBillCheckUserExistV2?";
export const ebillOtpAuthUrl = BASE_URL + "ebill/OTPeBillAuthRequest?";
export const ebillActivateUrl = BASE_URL + "ebill/eBillRegistration?";
export const payBillUrl = BILL_PAY + "confirm.php";
export const removeAccountUrl = BASE_URL + "AccountOMNI/RemoveAccountRequest?";
export const eBillResendRequest = BASE_URL + "ebill/eBillResendRequest?";
export const popupMessageBanner = BASE_URL + "notifications/PopupMessageBanner?"
export const ebillTypeStatusUrl = BASE_URL + "ebill/BillStatusRequest?";
export const ebillDownloadRequestUrl = BASE_URL + "ebill/BillDownloadRequest?";
export const ebillSmartBillRegistrationUrl = BASE_URL + "ebill/SmartBillRegistration";

//voice
export const getCallForwardingStatusUrl = BASE_URL + "Voice/CheckCallForwardingStatus?";
export const getCallForwardingRequestUrl = BASE_URL + "Voice/CallForwardingRequest?";

//ftth urls
export const OTPRequest = BASE_URL + "Verify/SendOTPRequest?";
export const OTPValidation = BASE_URL + "Verify/VerifyOTPRequest?";
export const paymentsLogs = BASE_URL + 'NewCon/GetPaymentLogs?orderreff='
export const getDraftDetails = BASE_URL + 'NewCon/GetDraftDetails?'
export const saveDraftDetails = BASE_URL + 'NewCon/SaveDraftData'
export const updateDraftDetails = BASE_URL + 'NewCon/UpdateDraftData'
export const reserveFacility = BASE_URL + 'NewCon/ReserveFacility?'
export const ftthFileUpload = BASE_URL + 'NewCon/UploadMultipartSingle'
export const refundMoneyURL = BASE_URL + 'NewCon/UpdatePaymentLogs?'
export const CheckExistingCustomer = BASE_URL + 'NewCon/CheckExistCustomer?'
export const getCityListUrl = BASE_URL + 'NewCon/GetCityList'
export const getFeasibilityCheck = BASE_URL + 'NewCon/GetFeasibilityCheck?'
export const getBbPackagesList = BASE_URL + 'NewCon/GetBBPackagesInterim?'
export const getPeoTvPackagesList = BASE_URL + 'NewCon/GetPEOPackagesInterim?'

//RedeemVoucher
export const redeemVoucher = BASE_URL + "BBVAS/RedeemVoucher?";

//connection request
export const connectionRequestUrl = BASE_URL + "Sales/SalesLeadCreationRequest?";

// Gift Data
export const getDataGiftPackagesUrl = BASE_URL + "BBVAS/DataGiftPackages?";
export const getDataGiftEnrollPPUrl = BASE_URL + "BBVAS/DataGiftEnroll?";

//profile
export const terminateProfileUrl = BASE_URL + "Account/TerminateProfile";
export const getViewUserInfoUrl = BASE_URL + "Account/ViewUserInfo";
export const updatesContacttnfoUrl = BASE_URL + "Account/UpdateUserInfo"

//happy day
export const HappyDaySetUrl = BASE_URL + "BBVAS/HappyDay?"
