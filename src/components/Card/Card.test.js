import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';


const baseProps = {
  event:{
    id: 3,
    name: 'Event',
    description: 'Description',
    location_id: 123,
    image_url: 'url',
    image_url_medium: 'url',
    image_url_small: 'url',
    start_time: 'time',
    soundcloud_url: 'url',
    soundcloud_user_id: 'id'
  }
};

describe('Card Component is rendering', () => {
  test('valid props are passed', () => {
    const wrapper = shallow(
      <Card {...baseProps} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
