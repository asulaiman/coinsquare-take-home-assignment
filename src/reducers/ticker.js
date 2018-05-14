import { FETCH_TICKER_SUCCESS } from '../action-types/bitfinex';

export default function btcPrice(state = {}, action) {
  switch (action.type) {
    case FETCH_TICKER_SUCCESS:
      return parseFloat(action.ticker.last_price);
    default:
      return state;
  }
}
