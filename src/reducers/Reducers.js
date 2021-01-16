import { combineReducers } from "redux";
import products from "./ProductsReducer";
import item from "./ItemReducer";

const reducer = combineReducers({
    products,
    item
});

export default reducer;