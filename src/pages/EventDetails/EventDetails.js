import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';

const propTypes = {
  match: PropTypes.object.isRequired
};

const EventDetails = (props) => {
  return (
      <div className='content-container'>
        <Header title={'Breminale-Web'} />
        <div className='event-container'>
          <div className='event-banner'>
            <img src={'http://www.joko-bremen.de/breminale15/SAM_1657.jpg'} />
          </div>
          <div className='event-description'>
            <p>This is the Event with ID {props.match.params.id}</p>
          </div>
        </div>
      </div>
    );
};

EventDetails.propTypes = propTypes;

export default EventDetails;
