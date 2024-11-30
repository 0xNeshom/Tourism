const initialState ={
    user : null,
    role : null,
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN' : {
            return {
                ...state,
                user : action.payload.user,
                role : action.payload.role,
            }
        };
        case 'LOGOUT' : {
            return initialState;
        };
        default :
        return state;
    }
}

export default userReducer;