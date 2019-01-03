import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FileSelectDropzone = ({
  acceptedFiles,
  children,
  draggedFiles,
  getRootProps,
  getInputProps,
  isDragActive,
  isDragAccept,
  isDragReject,
  isFocused,
  open,
  rejectedFiles,
  ...props
}) => {
  return (
    <div
      {...getRootProps({
        className: classNames('dropzone', {
          'dropzone__is-active': isDragActive,
          'dropzone__is-reject': isDragReject
        })
      })}
      {...props}
    >
      <input {...getInputProps()} />
      {children}
    </div>
  );
};

FileSelectDropzone.propTypes = {
  acceptedFiles: PropTypes.array,
  children: PropTypes.node,
  draggedFiles: PropTypes.array,
  getRootProps: PropTypes.func,
  getInputProps: PropTypes.func,
  isDragAccept: PropTypes.bool,
  isDragActive: PropTypes.bool,
  isDragReject: PropTypes.bool,
  isFocused: PropTypes.bool,
  open: PropTypes.func,
  rejectedFiles: PropTypes.array
};

export default FileSelectDropzone;
