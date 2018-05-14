import React from 'react';
import { connect } from 'react-redux';
import AccountBalance from './AccountBalance';
import TradeInput from './TradeInput';
import TradeQuote from './TradeQuote';
import ActionButton from './ActionButton';
import { FETCH_TICKER } from '../../action-types/bitfinex';
import { TRADE_BTC } from '../../action-types/account';

export class CurrencyPairTrading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tradeKey: Date.now(),
      currAmount: null
    };
  }

  componentWillMount() {
    const { fetchTicker } = this.props;
    fetchTicker();
  }

  render() {
    const { tradeKey, currAmount } = this.state;
    const { balanceUSD } = this.props;
    return (
      <div className="currency-pair-trading">
        <AccountBalance />
        <TradeInput
          key={`trade-input-${tradeKey}`}
          onEnterAmount={::this.onEnterAmount} />
        <TradeQuote
          currAmount={currAmount} />
        <ActionButton
          isActive={balanceUSD >= currAmount}
          title="Trade"
          onAction={::this.onTrade} />
      </div>
    );
  }

  onEnterAmount(amount) {
    this.setState({
      currAmount: amount
    });
  }

  onTrade() {
    const { tradeBTC } = this.props;
    const { currAmount: USDTraded } = this.state;
    tradeBTC(USDTraded);
    this.setState({
      tradeKey: Date.now(),
      currAmount: null
    });
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTicker: () => dispatch({ type: FETCH_TICKER }),
    tradeBTC: (USDTraded) => dispatch({ type: TRADE_BTC, USDTraded }),
  }
};
function mapStateToProps({ account: { amountUSD: balanceUSD}}) {
  return {
    balanceUSD,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyPairTrading);
