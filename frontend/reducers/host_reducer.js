import { RECEIVE_HOST, RECEIVE_HOSTS, CLEAR_HOST } from '../actions/host_actions';
import { merge } from 'lodash'

const _defaultState = {
  hosts: {},
  host: {}
};

const HostReducer = (state = _defaultState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_HOSTS:
      newState = merge({}, state)
      newState.hosts = action.hosts
      return newState;
    case RECEIVE_HOST:
      newState = merge({}, state)
      newState.host = action.host
      return newState;
    case CLEAR_HOST:
      return _defaultState;
    default:
      return state;
  }
};

export default HostReducer;
