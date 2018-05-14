import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export class TradeQuote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currQuote: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currQuote: this.calculateQuote(nextProps)
    });
  }

  render() {
    return (
      <div className="trade-quote">
        <h3 className="section-heading">For</h3>
        <div className="currency">BTC</div>
        <div className="quote">{this.state.currQuote}</div>
      </div>
    );
  }

  calculateQuote(props) {
      const { btcPrice, currAmount } = props;
      if (!currAmount || !btcPrice) {
        return 'Display Quote';
      }
      return Number(currAmount / btcPrice).toFixed(8);
  }
}

function mapStateToProps(state) {
  return {
    btcPrice: state.btcPrice
  };
}

export default connect(mapStateToProps)(TradeQuote);

TradeQuote.propTypes = {
  currAmount: PropTypes.number
};
