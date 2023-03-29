import SLT from "../src/SLT";
import dotenv from "dotenv";
import process from "process";
import { AccountList, ServiceList, UsageDetails } from "../src/Types";

dotenv.config();

(async () => {
    const slt = new SLT(process.env.MYSLT_USER!, process.env.MYSLT_PASS!);

    let account: AccountList = await slt.login().then(() => slt.getAccountDetails());
    let service_list: ServiceList = await slt.getServiceDetails(account[0].telephoneno);
    let usage: UsageDetails = await slt.getAddonsUsage(
        service_list.listofBBService![0].serviceID
    );
    console.log(usage);
})();
