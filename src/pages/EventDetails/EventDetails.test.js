import React from 'react';
import { shallow } from 'enzyme';
import EventDetails from './EventDetails';


const baseProps = {
  match: {
    params: {
      id: 321
    }
  }
};

describe('EventDetails Component is rendering', () => {
  test('valid props are passed', () => {
    const wrapper = shallow(
      <EventDetails {...baseProps} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
