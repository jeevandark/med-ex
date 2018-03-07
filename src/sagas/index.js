import { fork, takeLatest, all } from "redux-saga/effects";
import { fetchAllMessages } from "./messages";
import actionTypes from '../actionTypes';

// main saga generators
export function* sagas() {
  yield all([
    fork(takeLatest, actionTypes.MESSAGES_FETCH_REQUESTED, fetchAllMessages)
  ]);
}
