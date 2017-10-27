import React from 'react';
import Header from '../../components/Header/Header';

export default class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='content-container'>
        <Header title={'Breminale-Web'} />
      </div>
    );
  }
}
