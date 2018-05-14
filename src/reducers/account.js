import { UPDATE_ACCOUNT } from '../action-types/account';

const defaultState = {
  amountUSD: 156.12,
  amountBTC: Number(0).toFixed(8)
};

export default function account(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_ACCOUNT:
      const lastPrice = parseFloat(action.ticker.last_price);
      return {
        amountUSD: Number(state.amountUSD - action.USDTraded).toFixed(2),
        amountBTC: Number(action.USDTraded / lastPrice).toFixed(8)
      };

    default:
      return state;
  }
}
