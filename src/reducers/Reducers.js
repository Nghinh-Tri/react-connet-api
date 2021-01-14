import { combineReducers } from "redux";
import products from "./ProductsReducer";

const reducer = combineReducers({
    products
});

export default reducer;