import React from 'react';
import PropTypes from 'prop-types';

const FileSelectDropzoneText = ({ children, component: Component }) => (
  <Component className="dropzone-text">{children}</Component>
);

FileSelectDropzoneText.propTypes = {
  children: PropTypes.node,
  component: PropTypes.string
};

export default FileSelectDropzoneText;
