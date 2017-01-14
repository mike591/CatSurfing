import { RECEIVE_HOST, RECEIVE_HOSTS, CLEAR_HOST } from '../actions/host_actions';

const HostReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_HOSTS:
      return action.hosts;
    case RECEIVE_HOST:
      return action.host;
    case CLEAR_HOST:
      return {};
    default:
      return state;
  }
};

export default HostReducer;
