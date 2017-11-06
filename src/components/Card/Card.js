import React from 'react';
import PropTypes from 'prop-types';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Link } from 'react-router-dom';


const propTypes = {
    event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location_id: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
    image_url_medium: PropTypes.string.isRequired,
    image_url_small: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    soundcloud_url: PropTypes.string.isRequired,
    soundcloud_user_id: PropTypes.string.isRequired,
  }).isRequired
};

const EventCard = (props) => {
  const { event } = props;

  return (
    <Link to={`/events/${event.id}`}>
      <GridTile
        key={event.id}
        title={event.name}
        subtitle={<span>by <b>{event.description}</b></span>}
        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
      >
        <img src={"https://via.placeholder.com/350x150"} />
      </GridTile>
    </Link>
  );
};

EventCard.propTypes = propTypes;

export default EventCard;
