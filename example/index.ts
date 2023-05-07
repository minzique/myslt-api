import {SLT} from "../src/SLT";
import dotenv from "dotenv";
import process from "process";
import { AccountDetails, ServiceDetailsResponse, UsageDetails } from "../src/Types";

dotenv.config();

(async () => {
    const slt = new SLT(process.env.MYSLT_USER!, process.env.MYSLT_PASS!);

    let acc_list: AccountDetails[] = (await slt.login().then(() => slt.getAccountDetails()));
    console.log(acc_list)
    let account = acc_list[0]
    let service_list: ServiceDetailsResponse = await slt.getServiceDetails(account.telephoneno);
    let serviceID = service_list.listofBBService![0].serviceID;
    // let usage: UsageDetails[] = await slt
    //     .getAddonsData(serviceID)
    //     .then((d) => d.usageDetails);

    // console.log("ExtraGB: \n", await slt.getExtraGB(serviceID));
    // console.log("BonusData: \n", await slt.getBonusData(serviceID));
    // console.log("AddonsData: \n", await slt.getAddonsData(serviceID));
    // console.log("FreeData: \n", await slt.getFreeData(serviceID));

    console.log(await slt.getBillHistory(account.telephoneno, account.accountno));
    let profile = await slt.getProfile(serviceID)
    console.log(await slt.getExtraGBDetails(serviceID, profile.subscriber_package));
})();
