import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { TradeQuote } from './TradeQuote';
import sinon from 'sinon';

describe('<TradeQuote />', () => {
  it('should show default text for quote when no amount is entered', () => {
    const props = {
      currAmount: null,
    };

    const cmp = shallow(<TradeQuote/>);
    cmp.setProps(props);
    const quote = cmp.find('.quote');
    expect(quote.text()).to.equal('Display Quote');
  });
  it('should show default text for quote when an amount is entered but btcPrice is not set', () => {
    const props = {
      currAmount: 1,
      btcPrice: null,
    };

    const cmp = shallow(<TradeQuote/>);
    cmp.setProps(props);
    const quote = cmp.find('.quote');
    expect(quote.text()).to.equal('Display Quote');
  });
  it('should show correct quote when an amount is entered and btcPrice is set', () => {
    const props = {
      currAmount: 1,
      btcPrice: 800,
    };

    const cmp = shallow(<TradeQuote/>);
    cmp.setProps(props);
    const quote = cmp.find('.quote');
    expect(quote.text()).to.equal('0.00125000');
  });
});
