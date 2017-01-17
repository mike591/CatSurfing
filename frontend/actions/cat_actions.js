import * as APIUtils from '../util/api_utils';
export const RECEIVE_CAT = "RECEIVE_CAT";
export const REMOVE_CAT = "REMOVE_CAT";
export const RECEIVE_ALL_CATS = "RECEIVE_ALL_CATS";

export const receiveAllCats = (cats) => ({
  type: RECEIVE_ALL_CATS,
  cats
});

export const receiveCat = (cat) => ({
  type: RECEIVE_CAT,
  cat
});

export const removeCat = (cat) => ({
  type: REMOVE_CAT,
  cat
});

export const getCats = () => (dispatch) => (
  APIUtils.getCats().then((res) => dispatch(receiveAllCats(res)))
);


export const createCat = (cat) => (dispatch) => (
  APIUtils.createCat(cat).then((res) => dispatch(receiveCat(res)))
);

export const updateCat = (cat) => (dispatch) => (
  APIUtils.updateCat(cat).then((res) => dispatch(receiveCat(res)))
);

export const deleteCat = (id) => (dispatch) => (
  APIUtils.deleteCat(id).then((res) => dispatch(removeCat(res)))
);

export const createBooking = (booking) => (dispatch) => (
  APIUtils.createBooking(booking).then((res) => (
    APIUtils.getCats().then((cats) => (dispatch(receiveAllCats(cats))))
  ))
);

export const deleteBooking = (id) => (dispatch) => (
  APIUtils.deleteBooking(id).then((res) => (
    APIUtils.getCats().then((cats) => (dispatch(receiveAllCats(cats))))
  ))
);
