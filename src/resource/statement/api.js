import {post} from "../request/request";

const uploadBankStatement = ({data}) => {
    const url = '/statements';

    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }

    return post(url, data, config)
}

export default uploadBankStatement
