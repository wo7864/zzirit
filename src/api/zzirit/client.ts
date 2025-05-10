import { DefaultApi, PaymentsApi } from "./apis";
import { APIApi } from "./apis/APIApi";
import { Configuration } from "./runtime";

const config = new Configuration({
  // 필요시 basePath, accessToken 등 환경변수로 전달
});

class Client {
  auth: DefaultApi;
  api: APIApi;
  payments: PaymentsApi;

  constructor(config: Configuration) {
    this.auth = new DefaultApi(config);
    this.api = new APIApi(config);
    this.payments = new PaymentsApi(config);
  }
}

export const client = new Client(config);
