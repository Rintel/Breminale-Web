import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';

const propTypes = {
  match: PropTypes.object.isRequired
};

const EventDetails = (props) => {
  console.log(props);
  return (
      <div className='content-container'>

        <img src={"https://via.placeholder.com/350x150"} />
        This is the Event with ID {props.match.params.id}
      </div>
    );
};

EventDetails.propTypes = propTypes;

export default EventDetails;
