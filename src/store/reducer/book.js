import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from 'react-toastify';

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
        onFail: (state, {payload}) => {
            toast.error(payload.detail.error, {autoClose: 1500})
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


export default slice.reducer