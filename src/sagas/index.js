import { fork, takeLatest, all } from "redux-saga/effects";
import { fetchAllMessages } from "./messages";
import { MESSAGES_FETCH_REQUESTED } from '../actions/messagesActions';

// main saga generators
export function* sagas() {
  yield all([
    fork(takeLatest, MESSAGES_FETCH_REQUESTED, fetchAllMessages)
  ]);
}
