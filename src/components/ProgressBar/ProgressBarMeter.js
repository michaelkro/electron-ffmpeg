import React from 'react';
import PropTypes from 'prop-types';

const ProgressBarMeter = ({ progress, children, ...props }) => (
  <div
    className="progress-bar--meter"
    style={{ width: `${progress}%` }}
    {...props}
  >
    {children}
  </div>
);

ProgressBarMeter.propTypes = {
  children: PropTypes.node,
  progress: PropTypes.number
};

export default ProgressBarMeter;
