import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { CurrencyPairTrading } from './index';
import sinon from 'sinon';

const props = {
  fetchTicker: sinon.spy(),
};
describe('<CurrencyPairTrading />', () => {
  it('should set currentAmount in state onEnterAmount handler is called', () => {
    const cmp = shallow(<CurrencyPairTrading {...props} />);
    cmp.instance().onEnterAmount(2);
    expect(cmp.state().currAmount).to.equal(2);
  });
  it('should dispatch tradeBTC action when onTrade handler is called', () => {
    const cmpProps = {...props, tradeBTC: sinon.spy(), };
    const cmp = shallow(<CurrencyPairTrading { ...cmpProps } />);
    cmp.instance().onEnterAmount(2);
    cmp.instance().onTrade();
    expect(cmpProps.tradeBTC).to.have.property('callCount', 1);
    expect(cmpProps.tradeBTC.calledWith(2)).to.equal(true);
  });
  it('should clear current amount when onTrade handler is called', () => {
    const cmpProps = {...props, tradeBTC: sinon.spy(), };
    const cmp = shallow(<CurrencyPairTrading { ...cmpProps } />);
    cmp.instance().onEnterAmount(2);
    cmp.instance().onTrade();
    expect(cmp.state().currAmount).to.equal(null);
  });
});
