import { FETCH_TICKER_SUCCESS, FETCH_TICKER_ERROR }  from '../action-types/bitfinex';

export const fetchTickerSuccess = ticker => ({
  type: FETCH_TICKER_SUCCESS,
  ticker,
});
export const fetchTickerError = error => ({
  type: FETCH_TICKER_ERROR,
  error,
});
