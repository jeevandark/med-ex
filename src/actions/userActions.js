import actionTypes from '../actionTypes';

export function setActiveUser(userObj) {
    return {
        type: actionTypes.USER_ACTIVATE,
        payload: userObj
    };
}