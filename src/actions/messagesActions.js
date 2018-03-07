import actionTypes from '../actionTypes';

export function setMessages(mapOfMessages) {
    return {
        type: actionTypes.MESSAGES_FETCHED,
        payload: mapOfMessages
    };
}

export function fetchAllMessages() {
    return {
        type: actionTypes.MESSAGES_FETCH_REQUESTED
    };
}
