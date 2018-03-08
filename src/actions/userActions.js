export const USER_ACTIVATE = 'user.ACTIVATE';

export function setActiveUser(userObj) {
    return {
        type: USER_ACTIVATE,
        payload: userObj
    };
}