import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./store/store";
import {ToastContainer} from "react-toastify";
import {BrowserRouter} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ToastContainer/>
            <App/>
        </Provider>
    </BrowserRouter>
);


