import responseData from "./json.js";

export function getFilmSize () {
    return responseData
}

export function formatCurrency(num) {
	if(num==null) num = 0;
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }