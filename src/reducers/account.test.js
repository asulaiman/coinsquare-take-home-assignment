import React from 'react';
import { expect } from 'chai';
import { UPDATE_ACCOUNT } from '../action-types/account';
import { spy } from 'sinon';
import accountReducer from './account';

describe('Account reducer', () => {
  it('should return deducted amountUSD and updated amountBTC when called with USD amount traded with', () => {
    expect(accountReducer({ amountUSD: 100}, { ticker: { last_price: 10}, USDTraded: 10, type: UPDATE_ACCOUNT }))
      .to.deep.equal({
      amountUSD: '90.00',
      amountBTC: '1.00000000',
    });
  });
  it('should return existing state if reducer isnt called with update account action', () => {
    expect(accountReducer({ amountUSD: 100}, { ticker: { last_price: 10}, USDTraded: 10, type: null }))
      .to.deep.equal({
      amountUSD: 100,
    });
  });
});
