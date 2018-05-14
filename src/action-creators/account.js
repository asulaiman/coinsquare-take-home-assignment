import { UPDATE_ACCOUNT }  from '../action-types/account';

export const updateAccount = ({ USDTraded, ticker }) => ({
  type: UPDATE_ACCOUNT,
  USDTraded,
  ticker,
});
