import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from 'react-toastify';
import {clear} from "./user";

const slice = createSlice({
    name: 'book',
    initialState: {books: {}, file_path: ''},
    reducers: {
        onCreateSuccess: (state, {payload}) => {
            toast.success("Success", {autoClose: 1500})
        },
        onUploadSuccess: (state, {payload}) => {
            state.file_path = payload.generated_name
        },
        changeFilePath: (state, {payload}) => {
            state.file_path = ' '
        },
        onGetSuccess: (state, {payload}) => {
            state.books = payload
        },
        onFail: (state, {payload: {data, status}}) => {
            if (status === 401){
                localStorage.setItem('access', '')
                clear()
            }
            status === 403 ? toast.error('You don\'t have this permission', {autoClose: 1500})
                : toast.error(data.detail, {autoClose: 1500})
        }
    }
})


export const {changeFilePath} = slice.actions

export const create = (data) => apiCall({
    url: 'books',
    method: 'POST',
    onSuccess: slice.actions.onCreateSuccess.type,
    onFail: slice.actions.onFail.type,
    data
});
export const upload = (data) => apiCall({
    url: 'file',
    method: 'POST',
    onSuccess: slice.actions.onUploadSuccess.type,
    onFail: slice.actions.onFail.type,
    data
});
export const getAll = () => apiCall({
    url: 'books',
    method: 'GET',
    onSuccess: slice.actions.onGetSuccess.type,
    onFail: slice.actions.onFail.type,
});


export default slice.reducer