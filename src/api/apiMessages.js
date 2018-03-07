import { mock_messages } from './mock-messages';

export const keyMessageListInSessionStorage = 'keyMessageListInSessionStorage';

export function fetchMessages(filterObj = null) {
    // possibly implement some filtering using the filterObj param. If null, return all
    return new Promise(resolve => {
        let retArr = null;
        // simulate a back-end database that saves the state of the message-list - only for the session:
        let sessionSavedListStr = sessionStorage.getItem(keyMessageListInSessionStorage);
        if (sessionSavedListStr != null) {
            retArr = JSON.parse(sessionSavedListStr);
        } else {
            retArr = mock_messages;
        }
        resolve(retArr);
    });
}

