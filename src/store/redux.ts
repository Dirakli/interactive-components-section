import { configureStore } from "@reduxjs/toolkit";
import handler from "./handleChange";

const store = configureStore({
    reducer: {
        name: handler
    }
})

export default store;