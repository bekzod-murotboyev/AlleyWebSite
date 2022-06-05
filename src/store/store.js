import {configureStore} from "@reduxjs/toolkit";
import api from "./middleware/api";
import news from "./reducer/news";
import user from "./reducer/user";
import book from "./reducer/book";

export default configureStore({
    reducer:{news,user,book},
    middleware:[api]
})