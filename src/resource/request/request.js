import axios from "axios";

const baseUrl = '/budget-insights'

class RequestClient {

    post(url, data, config) {
        return axios.post(baseUrl + url, data, config);
    }

}

const request = new RequestClient()
const {post} = request

export { post }

export default request;
