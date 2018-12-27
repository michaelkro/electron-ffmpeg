import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

import {
  DROP_ERROR_MESSAGE,
  DROP_MESSAGE,
  FILE_TYPES
} from './ConvertFilesPageConstants';
import FileSelect from '../../components/FileSelect/FileSelect';
import { ProgressBar, ProgressBarMeter } from '../../components/ProgressBar';
import { List, ListItem } from '../../components/List';
import { Button } from '../../components/Button';

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

  onClear = () => {
    this.props.clearFilesAction();
    this.props.history.push('/');
  };

  progressPercentage = ({ complete, duration, timemark }) => {
    if (timemark) {
      return moment.duration(timemark).asMilliseconds() / (duration * 10);
    } else if (complete) {
      return 100;
    } else {
      return 0;
    }
  };

  render() {
    const {
      allFilesConverted,
      convertFilesAction,
      files,
      filesInProgress,
      removeFileAction
    } = this.props;

    return (
      <div className="convert-files-page">
        <FileSelect
          accept={FILE_TYPES}
          errorMessage={DROP_ERROR_MESSAGE}
          message={DROP_MESSAGE}
          onDrop={this.onDrop}
        />
        <List>
          {files.map(file => (
            <ListItem key={file.name}>
              <div className="list-item--left">{file.name}</div>
              <ProgressBar>
                <ProgressBarMeter progress={this.progressPercentage(file)} />
              </ProgressBar>
              <div className="list-item--right">
                {file.timemark ? (
                  `${Math.floor(this.progressPercentage(file))}%`
                ) : (
                  <Button isIcon onClick={() => removeFileAction(file)}>
                    <FontAwesomeIcon icon="times" size="1x" />
                  </Button>
                )}
              </div>
            </ListItem>
          ))}
        </List>
        <div className="convert-files-page--footer">
          <Button
            disabled={filesInProgress.length}
            type="default"
            onClick={this.onClear}
          >
            Clear
          </Button>
          <Button
            disabled={filesInProgress.length || allFilesConverted}
            type="primary"
            onClick={() => convertFilesAction(files)}
          >
            Convert
          </Button>
        </div>
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
