import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { fetchTicker } from './bitfinex';
import { tradeBTC } from './account';
import { TRADE_BTC } from '../action-types/account';
import { FETCH_TICKER } from '../action-types/bitfinex';

export function* sagas() {
  yield [
    fork(takeLatest, FETCH_TICKER, fetchTicker),
    fork(takeLatest, TRADE_BTC, tradeBTC)
  ];
}
