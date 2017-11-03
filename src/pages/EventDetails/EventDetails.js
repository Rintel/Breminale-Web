import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import { CardMedia, CardTitle } from 'material-ui/Card';
import axios from 'axios';
import moment from 'moment';

moment.locale('de');

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired
};

export default class EventDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        name: null,
        description: null,
        start_time: '2016-07-15T18:00:00.000+02:00',
      }
    };
  }

  componentDidMount() {
    axios.get(`https://serene-ocean-3356.herokuapp.com/api/v1/events/${this.props.match.params.id}.json`)
      .then(res => {
        const content = res.data;
        this.setState({ content: content });
    });
  }

  render() {
  return (
      <div className='content-container'>
        <Header title={'Breminale-Web'} />
        <div className='event-container'>
          <div className='event-banner'>
            <CardMedia
              overlay={<CardTitle title={this.state.content.name} subtitle={moment(this.state.content.start_time).format('LLL')} />}
            >
              <img src="http://www.joko-bremen.de/breminale15/SAM_1657.jpg" alt="" />
            </CardMedia>
          </div>
          <div className='event-description'>
            <div className='event-description__header'>
              {'Beschreibung'}
            </div>
            <div className='event-description__content'>
              <p>{this.state.content.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EventDetails.propTypes = propTypes;
