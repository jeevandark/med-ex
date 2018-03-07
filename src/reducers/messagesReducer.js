import actionTypes from "../actionTypes";

const messagesReducerInitialState = {
    messagesById: {},
    messagesIdArray: [],
    numOfUnreadMessages: 0
};

const messagesReducer = (state = messagesReducerInitialState, action) => {
    switch (action.type) {
        case actionTypes.MESSAGES_FETCHED:
            let mapById = {};
            let arrById = [];
            let numOfUnread = 0;
            if (action.payload != null) {
                mapById = action.payload.reduce((map, obj) => {
                    map[obj.id] = obj;
                    return map;
                }, {});
                arrById = action.payload.map(item => item.id);
                numOfUnread = action.payload.reduce((countOfUnread, curItem) => {
                    return curItem.isRead ? countOfUnread : countOfUnread + 1;
                }, 0);
            }
            let newState = {
                ...state,
                messagesById: mapById,
                messagesIdArray: arrById,
                numOfUnreadMessages: numOfUnread
            };
            return newState;
        default:
            return state;
    }
}

export default messagesReducer;