import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  DROP_ERROR_MESSAGE,
  DROP_MESSAGE,
  FILE_TYPES
} from './FileSelectPageConstants';
import FileSelect from '../../components/FileSelect/FileSelect';

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

  render() {
    return (
      <div className="file-select-page">
        <FileSelect
          accept={FILE_TYPES}
          errorMessage={DROP_ERROR_MESSAGE}
          isLarge
          message={DROP_MESSAGE}
          onDrop={this.onDrop}
        />
      </div>
    );
  }
}

FileSelectPage.propTypes = {
  addFilesAction: PropTypes.func,
  history: PropTypes.object
};

export default FileSelectPage;
