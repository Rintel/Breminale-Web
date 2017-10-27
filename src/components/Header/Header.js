import React from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired
};

const Header = ({ title }) => {
  return (
    <AppBar
      className='Header'
      title={title}
      iconClassNameRight='muidocs-icon-navigation-expand-more'
      showMenuIconButton={false}
    />
  );
};

Header.propTypes = propTypes;

export default Header;
