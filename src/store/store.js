import {configureStore} from "@reduxjs/toolkit";
import api from "./middleware/api";

export default configureStore({
    reducer:{},
    middleware:[api]
})