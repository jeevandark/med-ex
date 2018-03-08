import merge from "lodash/merge";

import {USER_ACTIVATE} from '../actions/userActions';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_ACTIVATE:
            return merge({}, state, action.payload);
        default:
            return state;
    }
}

export default userReducer;