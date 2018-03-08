export const MESSAGES_FETCH_REQUESTED = 'messages.MESSAGES_FETCH_REQUESTED';
export const MESSAGES_FETCHED = 'messages.MESSAGES_FETCHED';
export const MESSAGES_MARK_AS_READ = 'messages.MARK_AS_READ';

export function setMessages(mapOfMessages) {
    return {
        type: MESSAGES_FETCHED,
        payload: mapOfMessages
    };
}

export function fetchAllMessages() {
    return {
        type: MESSAGES_FETCH_REQUESTED
    };
}

export function markAsRead(messageId) {
    return {
        type: MESSAGES_MARK_AS_READ,
        payload: messageId
    };
}
