import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../../components/Button';

class ConvertFilesPageFooter extends Component {
  onClear = () => {
    this.props.clearFilesAction();
    this.props.history.push('/');
  };

  render() {
    const {
      allFilesConverted,
      convertFilesAction,
      files,
      filesInProgress
    } = this.props;

    return (
      <div className="convert-files-page--footer">
        <div className="convert-files-page--footer--actions">
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

ConvertFilesPageFooter.propTypes = {
  allFilesConverted: PropTypes.bool,
  clearFilesAction: PropTypes.func,
  convertFilesAction: PropTypes.func,
  files: PropTypes.array,
  filesInProgress: PropTypes.array,
  history: PropTypes.object
};

export default ConvertFilesPageFooter;
