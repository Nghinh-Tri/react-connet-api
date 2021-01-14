import callAPI from "../utils/APICaller";
import * as Types from "./../constants/ActionType";

export const fetchProduct = () => {
    return (dispatch) => {
        return callAPI(`products`, 'GET', null).then(res => {
            dispatch(fetchProductSuccess(res.data))
        })
    }
}

export const fetchProductSuccess = (products) => {
    return {
        type: Types.FETCH_PRODUCTS_SUCCESS,
        products
    }
}
