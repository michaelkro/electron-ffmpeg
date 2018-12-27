import React from 'react';
import PropTypes from 'prop-types';

const List = ({ children, ...props }) => (
  <ul className="list" {...props}>
    {children}
  </ul>
);

List.propTypes = {
  children: PropTypes.node
};

export default List;
