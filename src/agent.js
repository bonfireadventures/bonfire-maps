import superagentPromise from "superagent-promise";
import _superagent from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = "https://erick-otenyo.carto.com/api/v2/sql?";

const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set("authorization", `Token ${token}`);
  }
};

const requests = {
  get: url =>
    superagent
      .get(`${API_ROOT}${url}`)
      //   .use(tokenPlugin)
      .then(responseBody)
};

const Data = {
  bonfire: () => requests.get(`${encode("SELECT * from digischool")}`)
};

export default {
  Data
};
