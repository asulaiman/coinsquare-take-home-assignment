import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { TradeInput } from './TradeInput';
import sinon from 'sinon';

const props = {
  account: {
    amountUSD: 0,
  },
  onEnterAmount: sinon.spy(),
};
describe('<TradeInput />', () => {
  it('should show error when amount entered is greater than available USD balance in account', () => {
    const cmp = shallow(<TradeInput {...props} />);
    const input = cmp.find('input');
    input.simulate('change', {target: {value: 2}});
    expect(cmp.find('input').hasClass('amount invalid')).to.equal(true);
    expect(cmp.find('div.error').length).to.equal(1);
  });
  it('should call onEnterAmount prop when amount is entered', () => {
    const cmp = shallow(<TradeInput {...props} />);
    const input = cmp.find('input');
    input.simulate('change', {target: {value: 2}});
    expect(props.onEnterAmount).to.have.property('callCount', 2);
  });
});
