import React from 'react';
import { shallow } from 'enzyme';
import EventCard from './EventCard';


const baseProps = {
  event:{
    id: 3,
    name: 'Event',
    description: 'Description',
    location_id: 123,
    image_url: 'url',
    image_url_medium: 'url',
    image_url_small: 'url',
    start_time: '2016-07-15T18:00:00.000+02:00',
    soundcloud_url: 'url',
    soundcloud_user_id: 'id'
  }
};

describe('EventCard Component is rendering', () => {
  test('valid props are passed', () => {
    const wrapper = shallow(
      <EventCard {...baseProps} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
