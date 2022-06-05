import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from 'react-toastify';

const slice = createSlice({
    name: 'news',
    initialState: {news: {}},
    reducers: {
        onCreateSuccess: (state, {payload}) => {
            toast.success("Success", {autoClose: 1500})
        },
        onFail: (state, {payload}) => {
            toast.error(payload.detail.error, {autoClose: 1500})
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