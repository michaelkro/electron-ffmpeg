import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ children, ...props }) => (
  <div className="progress-bar" {...props}>
    {children}
  </div>
);

ProgressBar.propTypes = {
  children: PropTypes.node
};

export default ProgressBar;
