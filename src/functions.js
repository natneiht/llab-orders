import responseData from "./json.js";
import { API_ROUTE } from "./appConstants";
import { getLoginToken } from "./loginFunction";
import axios from "axios";

export async function getFilmSizeList() {
  // const loginToken = await getLoginToken();
  const loginToken = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxsYWItdGVtcG9yYXJ5LWF1dGgtZW1haWxAbGxhYi52biIsImlhdCI6MTU4MTUwNDEwNSwiZXhwIjoxNTgyMTA4OTA1fQ.lN_G-xvFgg5BN-fT_fx5zZ0ZFsLOdOxyqe7KSWY43MOlSOvpI2ht0cMCEnQtW_nkq1CFlWWi9vIhOqAHaSm1LddBJWhrfKovkZXCU7EmSVMqw_5emZzbKRkZCui1D_QeSt7D3DxsAsszTOt7h2kPlR7XJ4kTMzd8fdYMIqxIZnNf_pP3pyoplhspVwuKR0-Esaj1zzRCLY-v7j0H734gbsrlp6NKKEYMaii1vTRUO2YMaAA6s5qf0Oh6HBeG4DwlhNPnkjFbUsp3KERHmqEK9c932wfQ9OiDbdjup7-vgQemUMxL0WEFNR_UdHrMQfVzHBMh7w3ANXnJL58DkMfuNQ`;

  return new Promise((resolve, reject) => {
    try {
      let config = {
        headers: {
          Authorization: loginToken
        }
      };
      axios.post(API_ROUTE.FILM_SIZE, config).then((data) => {
        resolve(data.data.items);
      });
    } catch (err) {
      reject(err);
    }
  });
}

export function formatCurrency(num) {
  if (num == null) num = 0;
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
