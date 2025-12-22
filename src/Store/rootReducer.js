import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';

const appReducer = combineReducers({
  user: userReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === 'app/reset') {
    state = undefined;
  }

  return appReducer(state, action);
};
