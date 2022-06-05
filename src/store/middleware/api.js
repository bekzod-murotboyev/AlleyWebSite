import axios from "axios";
import {apiCall} from "../api";


const api = ({dispatch}) => (next) => (action) => {
    if (action.type !== apiCall.type) {
        next(action);
        return;
    }
    next(action)
    const {url, method, onSuccess, onFail, data} = action.payload
    let token = localStorage.getItem('access')
    let headers
    if (token)
        headers = {'Authorization': token}


    axios({
        baseURL: 'http://50.116.20.197:9095/',
        url,
        method,
        data,
        headers
    }).then(res => {
        dispatch({
            type: onSuccess,
            payload: res.data
        })
    }).catch(err => {
        dispatch({
            type: onFail,
            payload: err.response.data
        })
    })
}

export default api;