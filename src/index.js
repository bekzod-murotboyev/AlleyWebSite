import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {ToastContainer} from "react-toastify";
import {Provider} from "react-redux";
import store from "./store/store";
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ToastContainer/>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
