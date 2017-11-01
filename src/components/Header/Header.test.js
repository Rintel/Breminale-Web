import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';


const baseProps = {
  title: 'Breminale',
};

describe('Header Component is rendering', () => {
  test('valid props are passed', () => {
    const wrapper = shallow(
      <Header {...baseProps} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
