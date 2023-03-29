import {
    loginUrl,
    getAccountDetailsUrl,
    getServiceDetailRequestUrl,
    getUsageSummaryUrl,
    getAddonsDataUrl,
} from "./URLs";
import {
    BaseAPIRespose,
    AccountDetails,
    AccountList,
    ServiceList,
    UsageSummaryResponse,
} from "./Types";
import { URLSearchParams } from "url";
import axios, { AxiosInstance } from "axios";

export default class SLT {
    public username: string;
    public password: string;
    public auth_token?: string;
    public refresh_token?: string;

    // public account_details?: AccountDetails;
    // public service_list?: ServiceList;

    readonly request: AxiosInstance;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
        this.request = axios.create({
            headers: {
                "X-IBM-Client-Id": "41aed706-8fdf-4b1e-883e-91e44d7f379b",
            },
        });
    }

    async login() {
        return this.request
            .post(
                loginUrl,
                new URLSearchParams({
                    username: this.username,
                    password: this.password,
                    channelID: "WEB",
                })
            )
            .then((response) => {
                if (response.data.hasOwnProperty("errorShow")) {
                    throw new Error(response.data.errorShow);
                } else if (response.status === 200) {
                    this.auth_token = response.data.accessToken;
                    this.refresh_token = response.data.refreshToken;
                    this.request.defaults.headers.common["Authorization"] =
                        "Bearer " + this.auth_token;
                    return response.data;
                } else {
                    throw new Error(response.data.errorShow);
                }
            })
            .catch((err) => {
                if (err?.response.status === 401) {
                    throw new Error("Invalid user name and password");
                } else {
                    throw err;
                }
            });
    }

    public async APIGetData(url: string) {
        return this.request
            .get(url)
            .then((response) => {
                if (response.data.isSuccess) {
                    if (response.data.dataBundle.length === 0) {
                        throw new Error("Unable to fetch data");
                    }
                    return response.data.dataBundle;
                } else {
                    throw new Error(response.data.errorShow);
                }
            })
            .catch((err) => err);
    }

    async getAccountDetails(username?: string): Promise<AccountList> {
        return this.APIGetData(
            getAccountDetailsUrl + "username=" + (username ? username : this.username)
        );
    }

    async getServiceDetails(telephoneNo: string): Promise<ServiceList> {
        return this.APIGetData(getServiceDetailRequestUrl + "telephoneNo=" + telephoneNo);
    }

    async getUsageSummary(serviceID: string): Promise<UsageSummaryResponse> {
        return this.APIGetData(getUsageSummaryUrl + "subscriberID=" + serviceID);
    }

    async getAddonsUsage(serviceID: string) {
        return this.APIGetData(getAddonsDataUrl + "subscriberID=" + serviceID);
    }

    public async getBBSummary(serviceID: string) {}
}
