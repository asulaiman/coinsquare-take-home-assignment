import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export class TradeInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currAmount: '',
      invalidAmount: false,
    };
  }

  render() {
    const { account } = this.props;
    return (
      <div className="trade-input">
        <h3 className="section-heading">Trade</h3>
        <div className="currency">USD</div>
        <input
          type="number"
          className={this.state.invalidAmount ? 'amount invalid' : 'amount'}
          max={account.amountUSD}
          placeholder="Enter your amount"
          onChange={::this.onChange}
          value={this.state.currAmount} />
        {this.state.invalidAmount ? <div className='error'>Amount cannot exceed USD balance</div> : null}
      </div>
    );
  }

  onChange(e) {
    const amountMax = this.props.account.amountUSD;
    const currAmount = e.target.value;
    this.setState({
      currAmount,
      invalidAmount: Number(e.target.value) > Number(amountMax),
    }, () => this.props.onEnterAmount(parseFloat(this.state.currAmount)));
  }
}

function mapStateToProps(state) {
  return {
    account: state.account
  };
}

export default connect(mapStateToProps)(TradeInput);

TradeInput.propTypes = {
  onEnterAmount: PropTypes.func.isRequired
};
