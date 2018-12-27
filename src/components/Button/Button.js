import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { BUTTON_TYPES } from './ButtonConstants';

const Button = ({ children, isIcon, type, ...props }) => (
  <button
    className={classNames('button', BUTTON_TYPES[type], { 'is-icon': isIcon })}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  isIcon: PropTypes.bool,
  type: PropTypes.string
};

export default Button;
