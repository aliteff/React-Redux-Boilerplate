export const selectActiveUser = (user) => {
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const editUserInfo = (user, targetName, targetValue=null) => {
    return {
        type: 'USER_INFO_CHANGED',
        payload: {
            id:user.id,
            targetName: targetName,
            targetValue: targetValue
        },
    }
};

