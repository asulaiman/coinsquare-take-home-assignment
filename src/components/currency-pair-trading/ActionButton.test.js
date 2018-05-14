import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import ActionButton from './ActionButton';
import sinon from 'sinon';

const onAction = sinon.spy();

describe('<ActionButton />', () => {
  it('calls onAction callback when action button is clicked', () => {
    const cmp = shallow(<ActionButton onAction={onAction} />);
    cmp.simulate('click');
    expect(onAction).to.have.property('callCount', 1);
  });
});
