import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from 'react-toastify';
import {clear} from "./user";

const slice = createSlice({
    name: 'news',
    initialState: {news: {},dropNews:false},
    reducers: {
        onCreateSuccess: (state, {payload}) => {
            toast.success("Success", {autoClose: 1500})
        },
        onFail: (state, {payload: {data, status}}) => {
            if (status === 401){
                state.dropNews=true
                localStorage.setItem('access', '')
            }
            status === 403 ? toast.error('You don\'t have this permission', {autoClose: 1500})
                : toast.error(data.detail?data.detail:data.detail.error, {autoClose: 1500})
        }
    }
})

export const create = (data) => apiCall({
    url: 'news',
    method: 'POST',
    onSuccess: slice.actions.onCreateSuccess.type,
    onFail: slice.actions.onFail.type,
    data
});


export default slice.reducer