import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import account from './account';
import btcPrice from './ticker';

export const reducers = combineReducers({
  form,
  account,
  btcPrice,
});
