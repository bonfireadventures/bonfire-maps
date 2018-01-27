import superagentPromise from "superagent-promise";
import _superagent from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = "https://erick-otenyo.carto.com/api/v2/sql?q=";

const encode = encodeURIComponent;
const responseBody = res => res.body;

// let token = null;
// const tokenPlugin = req => {
//   if (token) {
//     req.set("authorization", `Token ${token}`);
//   }
// };

const requests = {
  get: (url, format) =>
    superagent
      .get(`${API_ROOT}${url}&format=${format}`)
      //   .use(tokenPlugin)
      .then(responseBody)
};

const Data = {
  magical: sql => {
    if (sql) {
      return requests.get(
        `${encode("SELECT * from sites_magical")} ${encode(sql)}`,
        "geojson"
      );
    }
    return requests.get(`${encode("SELECT * from sites_magical")}`, "geojson");
  },
  bonfire: sql => {
    if (sql) {
      return requests.get(
        `${encode("SELECT * from bonfire_deals")} ${encode(sql)}`,
        "json"
      );
    }
    return requests.get(`${encode("SELECT * from bonfire_deals")}`, "json");
  }
};

export default {
  Data
};
