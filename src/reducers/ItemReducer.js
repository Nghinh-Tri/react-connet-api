import * as Types from "./../constants/ActionType";

var initState = {};

const itemReducer = (state = initState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCT_DETAIL:            
            return action.product        
        default:
            return state;
    }
}

export default itemReducer;