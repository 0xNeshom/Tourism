// userReducer.js
import { LOGIN, LOGOUT, SET_ROLE } from './actionTypes';

const initialState = {
  user: null,
  role: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        user: action.payload.user,
        role: action.payload.role,
      };
    }
    case LOGOUT: {
      return initialState;
    }
    case SET_ROLE: {
      return {
        ...state,
        role: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
