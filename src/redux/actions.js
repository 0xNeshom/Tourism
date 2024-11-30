// userActions.js
import { LOGIN, LOGOUT, SET_ROLE } from './actionTypes';

export const login = (user, role) => ({
  type: LOGIN,
  payload: { user, role },
});

export const logout = () => ({
  type: LOGOUT,
});

export const setRole = (role) => ({
  type: SET_ROLE,
  payload: role,
});
