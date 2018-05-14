import { call, put } from 'redux-saga/effects';
import bitfinexApi from '../api/bitfinex';
import { fetchTickerSuccess, fetchTickerError } from '../action-creators/bitfinex';

export function* fetchTicker() {
  try {
    const ticker = yield call(bitfinexApi.getTicker);
    yield put(fetchTickerSuccess(ticker));
  } catch (error) {
    yield put(fetchTickerError(error));
  }
}
