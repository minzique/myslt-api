import {
  loginUrl,
  getAccountDetailsUrl,
  getServiceDetailRequestUrl,
  getUsageSummaryUrl,
  getAddonsDataUrl,
  billDetailsUrl,
  getExtraGBUrl,
  getBonusDataUrl,
  getFreeDataUrl,
  getProfileRequestUrl,
  getBillHistoryRequestUrl,
  getExtraGBDetailsUrl,
  refreshTokenUrl,
} from "./URLs";
import {
  AccountDetails,
  ServiceDetailsResponse,
  BBSummaryResponse,
  VASUsageResponse,
  PaymentDetails,
  PaymentDetailsResponse,
  UserProfile,
  BillHistoryReponse,
  UserConfig,
  AuthTokens,
} from "./Types";
import { URLSearchParams } from "url";
import axios, { AxiosInstance } from "axios";

export class SLT {
  private sltConfig: UserConfig;
  readonly request: AxiosInstance;

  constructor(config: UserConfig) {
    this.sltConfig = config;
    this.request = axios.create({
      headers: {
        "X-IBM-Client-Id": "41aed706-8fdf-4b1e-883e-91e44d7f379b",
        // "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/113.0",
        // "Referer": "https://myslt.slt.lk/",
        // "Origin":"https://myslt.slt.lk",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }

  async login(username: string, password: string): Promise<AuthTokens> {
    let body = new URLSearchParams({
      username: username,
      password: password,
      channelID: "WEB",
    });
    let response = await this.request.post(loginUrl, body).catch((err) => {
      if (err.response.status === 401) {
        throw new Error("Invalid user name and password");
      }
      throw err;
    });
    if (response.data.hasOwnProperty("errorShow") || response.status != 200) {
      throw response.data.errorShow ? new Error(response.data.errorShow) : response;
    }
    this.request.defaults.headers.common["Authorization"] = "Bearer " + response.data.accessToken;
    this.sltConfig.creds = {
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
    };
    return this.sltConfig.creds;
  }

  async tokenRefresh(username: string, refreshToken: string) {
    let body = new URLSearchParams({
      UserName: username,
      RefreshToken: refreshToken,
      channelID: "WEB",
    });

    return this.request.post(refreshTokenUrl, body).then((response) => {
      if (response.status !== 200) {
        throw new Error("Failed to refresh tokens");
      }
      this.request.defaults.headers.common["Authorization"] = "Bearer " + response.data.accessToken;
      this.sltConfig.creds = {
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      };
      return response.data;
    });
  }
  
  // TODO: move this into a separate requests handler
  public async APIGetData(url: string) {
    return this.request
      .get(url)
      .then((response) => {
        if (response.data.isSuccess) {
          if (response.data.dataBundle.length === 0) {
            throw new Error("No data received from the enpoint: dataBundle.length === 0");
          }
          return response.data.dataBundle;
        } else {
          throw new Error(response.data.errorShow);
        }
      })
      .catch((err) => err);
  }
  // Account details
  async getAccountDetails(username: string): Promise<AccountDetails[]> {
    return this.APIGetData(getAccountDetailsUrl + "username=" + username);
  }
  async getServiceDetails(telephoneNo: string): Promise<ServiceDetailsResponse> {
    return this.APIGetData(getServiceDetailRequestUrl + "telephoneNo=" + telephoneNo);
  }
  async getPaymentDetails(telephoneNo: string, accountNo: string): Promise<PaymentDetailsResponse> {
    return this.APIGetData(billDetailsUrl + "telephoneNo=" + telephoneNo + "&accountNo=" + accountNo);
  }
  async getProfile(serviceID: string): Promise<UserProfile> {
    return this.APIGetData(getProfileRequestUrl + "subscriberID=" + serviceID);
  }
  async getBBSummary(serviceID: string): Promise<BBSummaryResponse> {
    return this.APIGetData(getUsageSummaryUrl + "subscriberID=" + serviceID);
  }

  // Value Added Services
  async getVASData(url: string, serviceID: string): Promise<VASUsageResponse> {
    return this.APIGetData(url + "subscriberID=" + serviceID);
  }
  async getExtraGB(serviceID: string) {
    return this.getVASData(getExtraGBUrl, serviceID);
  }
  async getBonusData(serviceID: string) {
    return this.getVASData(getBonusDataUrl, serviceID);
  }
  async getAddonsData(serviceID: string) {
    return this.getVASData(getAddonsDataUrl, serviceID);
  }
  async getFreeData(serviceID: string) {
    return this.getVASData(getFreeDataUrl, serviceID);
  }

  async getBillHistory(telephoneNo: string, accountNo: string): Promise<BillHistoryReponse> {
    return this.APIGetData(`${getBillHistoryRequestUrl}telephoneNo=${telephoneNo}&accountNo=${accountNo}`);
  }
  async getExtraGBDetails(serviceID: string, subscriber_package: UserProfile["subscriber_package"]) {
    return this.APIGetData(`${getExtraGBDetailsUrl}subscriberID=${serviceID}&packageName=${subscriber_package}`).then(
      (data) => data.data
    );
  }
  // async setHappyDate(serviceID: string, selectDay: Date) {
  //     return this.request.post(
  //         `${HappyDaySetUrl}subscriberID=${serviceID}&happydate=${selectDay.toLocaleDateString(
  //             "en-CA"
  //         )}&channel=SCP&commituser=user`
  //     );
  // }
}
