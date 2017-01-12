import { RECEIVE_CAT, REMOVE_CAT, RECEIVE_ALL_CATS } from '../actions/cat_actions';
import merge from 'lodash/merge';

const CatReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_CATS:
      return action.cats;
    case RECEIVE_CAT:
      newState = ({}, state);
      newState[action.cat.id] = action.cat;
      return newState;
    case REMOVE_CAT:
      newState = merge({}, state);
      delete newState[action.cat.id];
      return newState;
    default:
      return state;
  }
};

export default CatReducer;
