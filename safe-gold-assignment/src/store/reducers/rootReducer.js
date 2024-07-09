import { combineReducers } from '@reduxjs/toolkit';
import authentication from './authentication';
const rootReducer = combineReducers({
  authentication,
});

export default rootReducer;
