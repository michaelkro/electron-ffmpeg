import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DROP_ERROR_MESSAGE, DROP_MESSAGE, FILE_TYPES } from '../constants';
import {
  FileSelect,
  FileSelectDropzone,
  FileSelectDropzoneText
} from '../../components/FileSelect';

class FileSelectPage extends Component {
  onDrop = droppedFiles => {
    const files = droppedFiles.map(({ name, path, size, type }) => ({
      name,
      path,
      size,
      type
    }));

    if (files.length) {
      this.props.addFilesAction(files);
      this.props.history.push('/convert');
    }
  };

  renderDropzone = reactDropzoneProps => {
    return (
      <FileSelectDropzone {...reactDropzoneProps}>
        <FontAwesomeIcon
          icon={['far', 'file-audio']}
          size="9x"
          className="dropzone-icon"
        />
        <FileSelectDropzoneText component="p">
          {reactDropzoneProps.isDragReject ? DROP_ERROR_MESSAGE : DROP_MESSAGE}
        </FileSelectDropzoneText>
      </FileSelectDropzone>
    );
  };

  render() {
    return (
      <div className="file-select-page">
        <FileSelect accept={FILE_TYPES} isLarge onDrop={this.onDrop}>
          {this.renderDropzone}
        </FileSelect>
      </div>
    );
  }
}

FileSelectPage.propTypes = {
  addFilesAction: PropTypes.func,
  history: PropTypes.object
};

export default FileSelectPage;
