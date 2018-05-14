import React from 'react';
import { expect } from 'chai';
import { FETCH_TICKER_SUCCESS } from '../action-types/bitfinex';
import { spy } from 'sinon';
import tickerReducer from './ticker';

describe('Account reducer', () => {
  it('should return btc price when called with ticker object', () => {
    expect(tickerReducer({ amountUSD: 100}, { ticker: { last_price: '10.00'}, USDTraded: 10, type: FETCH_TICKER_SUCCESS }))
      .to.equal(10.00);
  });
  it('should return existing state if reducer isnt called with fetch ticker success action', () => {
    expect(tickerReducer({ amountUSD: 100}, { ticker: { last_price: 10}, USDTraded: 10, type: null }))
      .to.deep.equal({
      amountUSD: 100,
    });
  });
});
