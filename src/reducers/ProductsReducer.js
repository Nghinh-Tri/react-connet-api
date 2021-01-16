import * as Types from "./../constants/ActionType";

var initState = []

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state]
        default:
            return [...state];
    }
}

export default productReducer;