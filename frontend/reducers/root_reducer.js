import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import CatReducer from './cat_reducer';
import HostReducer from './host_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  cats: CatReducer,
  hosts: HostReducer
});

export default rootReducer;
