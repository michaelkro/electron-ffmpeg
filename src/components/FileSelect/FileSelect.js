import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Dropzone from 'react-dropzone';

const FileSelect = ({ accept, children, isLarge, onDrop }) => (
  <div
    className={classNames('file-select', {
      'file-select__is-large': isLarge
    })}
  >
    <Dropzone
      accept={accept}
      activeClassName="dropzone-active"
      multiple
      onDrop={onDrop}
      rejectClassName="dropzone-reject"
    >
      {children}
    </Dropzone>
  </div>
);

FileSelect.propTypes = {
  accept: PropTypes.string,
  children: PropTypes.func,
  isLarge: PropTypes.bool,
  onDrop: PropTypes.func
};

export default FileSelect;
