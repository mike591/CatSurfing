import * as APIUtils from '../util/api_utils';
export const RECEIVE_HOSTS = "RECEIVE_HOSTS";
export const RECEIVE_HOST = "RECEIVE_HOST";
export const CLEAR_HOST = "CLEAR_HOST";

export const receiveHosts = (hosts) => ({
  type: RECEIVE_HOSTS,
  hosts
});

export const receiveHost = (host) => {
  return ({
    type: RECEIVE_HOST,
    host
  });
};

export const clearHost = () => ({
  type: CLEAR_HOST
});

export const getHosts = (city) => (dispatch) => (
  APIUtils.getHosts(city).then(res => dispatch(receiveHosts(res)))
);

export const getHost = (id) => (dispatch) => (
  APIUtils.getHost(id).then(res => dispatch(receiveHost(res)))
);

export const createReview = (review) => (dispatch) => {
  return (
    APIUtils.createReview(review).then(res => dispatch(receiveHost(res)))
  );
};

export const updateReview = (review) => (dispatch) => (
  APIUtils.updateReview(review).then(res => dispatch(receiveHost(res)))
);

export const deleteReview = (review) => (dispatch) => (
  APIUtils.deleteReview(review).then(res => dispatch(receiveHost(res)))
);
