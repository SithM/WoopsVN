import axios from "axios";
import * as Config from "../../Constains/Configs";

export default function callApi(endpoint, method, body) {
  const header = { "Content-Type": "application/json", lang: "en" };

  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`, //http://api.woopvn.com:8001
    data: body,
    headers: header
  }).catch(err => {
    console.log(err);
  });
}
