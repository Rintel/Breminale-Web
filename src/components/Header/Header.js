import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  title: PropTypes.string.isRequired
};

export default class Header extends React.Component {

  static propTypes = propTypes;

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <AppBar
          className='Header'
          title={this.props.title}
          iconClassNameRight='muidocs-icon-navigation-expand-more'
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          open={this.state.open}
          containerClassName={'drawer-container'}
        >
          <div className='menu-items-container'>
            <Menu>
              <Link to={'/'}>
                <MenuItem
                  style={{color: 'white'}}
                >
                  Events
                </MenuItem>
              </Link>
              <Link to={'/map'}>
                <MenuItem
                  style={{color: 'white'}}
                >
                  Karte
                </MenuItem>
              </Link>
              <MenuItem
                style={{color: 'white'}}
                className={'menu-item'}
                onClick={this.handleToggle}
              >
                Schließen
              </MenuItem>
            </Menu>
          </div>
        </Drawer>
      </div>
    );
  }
}
