import { call, put } from 'redux-saga/effects';
import bitfinexApi from '../api/bitfinex';
import { updateAccount } from '../action-creators/account';
import { fetchTickerSuccess } from '../action-creators/bitfinex';

export function* tradeBTC(action) {
  const ticker = yield call(bitfinexApi.getTicker);
  const { USDTraded } = action;
  yield put(updateAccount({ USDTraded, ticker }));
  yield put(fetchTickerSuccess(ticker));
}
