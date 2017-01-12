import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import CatReducer from './cat_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  cats: CatReducer
});

export default rootReducer;
