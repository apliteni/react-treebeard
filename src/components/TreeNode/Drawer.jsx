import React from 'react';
import PropTypes from 'prop-types';

const Drawer = ({ children }) => children;

Drawer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.func, PropTypes.shape({})),
    PropTypes.shape({}),
  ]),
};

export default Drawer;
