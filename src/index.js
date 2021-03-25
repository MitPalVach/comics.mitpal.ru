import 'regenerator-runtime/runtime';
import {API_URL, URL_COMICS} from "./constans/api";
import {getDataApi} from "./utils/getDataApi";

(async () => {
    const data = await getDataApi.getData(API_URL + URL_COMICS);
    console.log('результат', data);
})();












