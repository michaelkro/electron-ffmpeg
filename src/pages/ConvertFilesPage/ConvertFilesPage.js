import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ConvertFilesPageBody, ConvertFilesPageFooter } from './components';
import { DROP_ERROR_MESSAGE, DROP_MESSAGE, FILE_TYPES } from '../constants';
import {
  FileSelect,
  FileSelectDropzone,
  FileSelectDropzoneText
} from '../../components/FileSelect';

class ConvertFilesPage extends Component {
  onDrop = droppedFiles => {
    const files = droppedFiles.map(({ name, path, size, type }) => ({
      name,
      path,
      size,
      type
    }));

    if (files.length) {
      this.props.addFilesAction(files);
    }
  };

  renderDropzone = reactDropzoneProps => {
    return (
      <FileSelectDropzone {...reactDropzoneProps}>
        <FileSelectDropzoneText component="p">
          {reactDropzoneProps.isDragReject ? DROP_ERROR_MESSAGE : DROP_MESSAGE}
        </FileSelectDropzoneText>
      </FileSelectDropzone>
    );
  };

  render() {
    const {
      allFilesConverted,
      clearFilesAction,
      convertFilesAction,
      files,
      filesInProgress,
      history,
      removeFileAction
    } = this.props;

    return (
      <div className="convert-files-page">
        <FileSelect accept={FILE_TYPES} onDrop={this.onDrop}>
          {this.renderDropzone}
        </FileSelect>
        <ConvertFilesPageBody
          files={files}
          removeFileAction={removeFileAction}
        />
        <ConvertFilesPageFooter
          allFilesConverted={allFilesConverted}
          clearFilesAction={clearFilesAction}
          convertFilesAction={convertFilesAction}
          files={files}
          filesInProgress={filesInProgress}
          history={history}
        />
      </div>
    );
  }
}

ConvertFilesPage.propTypes = {
  addFilesAction: PropTypes.func,
  allFilesConverted: PropTypes.bool,
  clearFilesAction: PropTypes.func,
  convertFilesAction: PropTypes.func,
  files: PropTypes.array,
  filesInProgress: PropTypes.array,
  history: PropTypes.object,
  removeFileAction: PropTypes.func
};

export default ConvertFilesPage;
