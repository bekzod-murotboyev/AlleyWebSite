import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from 'react-toastify';
import qs from 'qs'

const slice = createSlice({
    name: 'user',
    initialState: {user: {}, token: ''},
    reducers: {
        onLoginSuccess: (state, {payload}) => {
            toast.success("Success", {autoClose: 500})
            state.token = payload.token_type
            localStorage.setItem("access", payload.token_type + ' ' + payload.access_token)
        },
        onLoginFail: (state, {payload}) => {
            localStorage.setItem('access', '')
            toast.error(payload.detail.error, {autoClose: 1500})
        },
        onCreateSuccess: (state, {payload}) => {
            toast.success("Success", {autoClose: 1500})
        },
        onFail: (state, {payload}) => {
            toast.error(payload.detail.error, {autoClose: 1500})
        }
    }
})


export const login = (data) => apiCall({
    url: 'users/login',
    method: 'POST',
    onSuccess: slice.actions.onLoginSuccess.type,
    onFail: slice.actions.onLoginFail.type,
    data: qs.stringify(data)
});

export const create = (data) => apiCall({
    url: 'users/create',
    method: 'POST',
    onSuccess: slice.actions.onCreateSuccess.type,
    onFail: slice.actions.onFail.type,
    data
});


export default slice.reducer