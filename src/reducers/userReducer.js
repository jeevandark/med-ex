import actionTypes from "../actionTypes";
import merge from "lodash/merge";

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.USER_ACTIVATE:
            return merge({}, state, action.payload);
        default:
            return state;
    }
}

export default userReducer;