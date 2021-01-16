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
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const deleteProduct = (id) => {
    return (dispatch) => {
        return callAPI(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(fetchProduct())
        })
    }
}

export const addProduct = (product) => {
    return (dispatch) => {
        return callAPI(`products`, 'POST', product).then(res => {
            dispatch(fetchProduct())
        })
    }
}

export const fetchProductDetail = (id) => {
    return (dispatch) => {
        return callAPI(`products/${id}`, 'GET', null).then(res => {
            dispatch(fetchProductDetailSuccess(res.data))
        })
    }
}

export const fetchProductDetailSuccess = (product) => {
    return {
        type: Types.FETCH_PRODUCT_DETAIL,
        product
    }
}

export const updateProduct = (product) => {
    return (dispatch) => {
        return callAPI(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(fetchProduct())
        })
    }
}