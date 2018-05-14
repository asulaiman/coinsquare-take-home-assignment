import React from 'react';
import CurrencyPairTrading from './currency-pair-trading';
import '../stylesheets/main.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="page-home">
        <CurrencyPairTrading />
      </div>
    );
  }
}
