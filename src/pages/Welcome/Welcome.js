import React from 'react';
import Header from '../../components/Header/Header';
import EventCard from '../../components/Card/Card';
import CircularProgress from 'material-ui/CircularProgress';
import axios from 'axios';
import { GridList } from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
  },
};

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null
    };
  }

  componentDidMount() {
    if (typeof localStorage !== 'undefined') {
      const json = localStorage.getItem("content");
      this.setState(() => ({content: JSON.parse(json)}));
    }

    axios.get(`https://serene-ocean-3356.herokuapp.com/api/v1/events.json`)
      .then(res => {
        const content = res.data;
        this.setState({ content });
        const json = JSON.stringify(this.state.content);
        localStorage.setItem("content", json);
    });
  }

  render() {
    return (
      <div className='content-container'>
        <Header
          title={'Breminale-Web'}
        />
        <div className='events-container'>
          <GridList
            cellHeight={260}
            style={styles.gridList}
          >
          {this.state.content ? this.state.content.filter(event => !event.deleted).map((event) => (
            <EventCard
              key={event.id}
              event={event}
            />
          )) : <CircularProgress size={60} thickness={7} /> }
        </GridList>
        </div>
      </div>
    );
  }
}
