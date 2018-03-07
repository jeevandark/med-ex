import { call, put } from 'redux-saga/effects';
import { fetchMessages } from '../api/apiMessages';
import { setMessages } from '../actions/messagesActions';

export function* fetchAllMessages() {
    let payload = yield call(fetchMessages);
    yield put(setMessages(payload));
}