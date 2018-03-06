import actionTypes from "../actionTypes";

const messagesReducerInitialState = {
    messagesById: {},
    messagesIdArray: [],
    unreadMessages: 0
};

const messagesReducer = (state = messagesReducerInitialState, action) => {
    switch (action.type) {
        case actionTypes.MESSAGES_FETCHED:
            state = {
                ...state
            };
            break;
        default:
            break;
    }
    return state;
}

export default messagesReducer;