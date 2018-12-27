import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Dropzone from 'react-dropzone';

class FileSelect extends Component {
  renderChildren = ({
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject
  }) => {
    return (
      <div
        {...getRootProps({
          className: classNames('dropzone', {
            'dropzone__is-active': isDragActive,
            'dropzone__is-reject': isDragReject
          })
        })}
      >
        <input {...getInputProps()} />
        <p className="dropzone-text">
          {isDragReject ? this.props.errorMessage : this.props.message}
        </p>
      </div>
    );
  };

  render() {
    return (
      <div
        className={classNames('file-select', {
          'file-select__is-large': this.props.isLarge
        })}
      >
        <Dropzone
          accept={this.props.accept}
          activeClassName="dropzone-active"
          multiple
          onDrop={this.props.onDrop}
          rejectClassName="dropzone-reject"
        >
          {this.renderChildren}
        </Dropzone>
      </div>
    );
  }
}

FileSelect.propTypes = {
  accept: PropTypes.string,
  addFilesAction: PropTypes.func,
  errorMessage: PropTypes.string,
  isLarge: PropTypes.bool,
  message: PropTypes.string,
  onDrop: PropTypes.func
};

export default FileSelect;
