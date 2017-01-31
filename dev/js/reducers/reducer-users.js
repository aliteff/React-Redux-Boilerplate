/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */


export const UserReducer = (state = null, action) => {

    let newState;

    switch (action.type) {

        case 'USER_INFO_CHANGED':
            newState = state.map((user) => {
                if( user.id === action.payload.id ){
                    const {targetName, targetValue} = action.payload;
                    return Object.assign({}, user, {[targetName]:targetValue} );
                } else {
                    // return Object.assign({}, user );
                    return user;
                }
            });
            return newState;//action.payload;

        // case 'USER_FIRST_NAME_CHANGED':
        //     newState = state.map((user) => {
        //         if( user.id === action.payload.id ){
        //             return Object.assign({}, user, {first:action.payload.first} );
        //         } else {
        //             // return Object.assign({}, user );
        //             return user;
        //         }
        //     });
        //     return newState;//action.payload;

        // case 'USER_LAST_NAME_CHANGED':
        //     newState = state.map((user) => {
        //         if( user.id === action.payload.id ){
        //             return Object.assign({}, user, {last:action.payload.last} );
        //         } else {
        //             // return Object.assign({}, user );
        //             return user;
        //         }
        //     });
        //     return newState;//action.payload;
    }
    return state;
}

