import { MESSAGES_FETCHED, MESSAGES_MARK_AS_READ } from '../actions/messagesActions';
import { keyMessageListInSessionStorage } from '../api/apiMessages';

const messagesReducerInitialState = {
    messagesById: {},
    messagesIdArray: [],
    numOfUnreadMessages: 0
};

const messagesReducer = (state = messagesReducerInitialState, action) => {
    switch (action.type) {
        case MESSAGES_FETCHED:
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
        case MESSAGES_MARK_AS_READ:
            let myMessage = state.messagesById[action.payload];
            if (myMessage != null) {
                if (!myMessage.isRead) {
                    let updatedMsgById = {
                        ...state.messagesById
                    };
                    updatedMsgById[action.payload].isRead = true;
                    let newUnreadCount = state.numOfUnreadMessages - 1;
                    let newState = {
                        ...state,
                        messagesById: updatedMsgById,
                        numOfUnreadMessages: newUnreadCount
                    };
                    saveMessagesAsArrayInSessionStorage(updatedMsgById);
                    return newState;
                }
            }
            return state;
        default:
            return state;
    }
}

function saveMessagesAsArrayInSessionStorage(msgById) {
    let myKeys = Object.keys(msgById);
    let arrToSave = myKeys.map(item => msgById[item]);
    if (arrToSave != null) {
        sessionStorage.setItem(keyMessageListInSessionStorage, JSON.stringify(arrToSave));
    };
}

export default messagesReducer;