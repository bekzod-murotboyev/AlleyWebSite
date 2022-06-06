import {createSlice, createAction} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from 'react-toastify';

const slice = createSlice({
    name: 'university',
    initialState: {universities: [], dropUniversities: false},
    reducers: {
        onCreateSuccess: (state, {payload}) => {
            toast.success("Success", {autoClose: 1500})
        },
        onGetSuccess: (state, {payload}) => {
            state.universities = payload
        },
        onFail: (state, {payload: {data, status}}) => {
            if (status === 401) {
                state.dropNews = true
                localStorage.setItem('access', '')
            }
                status === 403 ? toast.error('You don\'t have this permission', {autoClose: 1500})
                    : toast.error(data.detail ? data.detail : data.detail.error, {autoClose: 1500})
        }
    }
})


export const create = (data) => apiCall({
    url: 'university',
    method: 'POST',
    onSuccess: slice.actions.onCreateSuccess.type,
    onFail: slice.actions.onFail.type,
    data
});
export const getAll = () => apiCall({
    url: 'university',
    method: 'GET',
    onSuccess: slice.actions.onGetSuccess.type,
    onFail: slice.actions.onFail.type,
});


export default slice.reducer