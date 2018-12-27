import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ children, ...props }) => (
  <li className="list-item" {...props}>
    {children}
  </li>
);

ListItem.propTypes = {
  children: PropTypes.node
};

export default ListItem;
