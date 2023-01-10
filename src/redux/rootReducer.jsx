import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";
import { DetailReducer } from "./DetailReducer";
export const rootReducer = combineReducers({
    CartReducer,
    DetailReducer
})