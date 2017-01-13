import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser : currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors : errors
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS
});

export const signup = (user) => dispatch => (
  SessionApiUtil.signup(user)
    .then(
      res => dispatch(receiveCurrentUser(res)),
      res => dispatch(receiveErrors(res))
    )
);

export const edit = (user) => dispatch => (
  SessionApiUtil.edit(user).then(
    res => dispatch(receiveCurrentUser(res)),
    res => dispatch(receiveErrors(res))
  )
);

export const login = (user) => dispatch => (
  SessionApiUtil.login(user)
    .then(
      res => dispatch(receiveCurrentUser(res)),
      res => dispatch(receiveErrors(res))
    )
);

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then(
      res => dispatch(receiveCurrentUser(null)),
      res => dispatch(receiveErrors(res))
    )
);
