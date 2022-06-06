import {createSlice,createAction} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from 'react-toastify';
import qs from 'qs'

const slice = createSlice({
    name: 'user',
    initialState: {user: {}, token: ''},
    reducers: {
        onLoginSuccess: (state, {payload}) => {
            toast.success("Welcome!", {autoClose: 500})
            state.token = payload.token_type
            localStorage.setItem("access", payload.token_type + ' ' + payload.access_token)
        },
        onLoginFail: (state, {payload: {data, status}}) => {
            localStorage.setItem('access', '')
            toast.error(data.detail.error, {autoClose: 1500})
        },
        onCreateSuccess: (state, {payload}) => {
            toast.success("Success", {autoClose: 1500})
        },
        onFail: (state, {payload: {data, status}}) => {
            if (status === 401) {
                localStorage.setItem('access', '')
                state.token = ''
            }
            status === 403 ? toast.error('You don\'t have this permission', {autoClose: 1500})
                : toast.error(data.detail, {autoClose: 1500})
            toast.error(data.detail.error, {autoClose: 1500})
        },
        clearToken: (state, {payload}) => {
            state.token=''
        }
    }
})

export const clear=createAction('clearToken')

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