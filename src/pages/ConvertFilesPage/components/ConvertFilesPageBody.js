import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { progressPercentage } from '../helpers';
import { Button } from '../../../components/Button';
import { List, ListItem } from '../../../components/List';
import { ProgressBar, ProgressBarMeter } from '../../../components/ProgressBar';

const ConvertFilesPageBody = ({ files, removeFileAction }) => (
  <List>
    {files.map(file => (
      <ListItem key={file.name}>
        <div className="list-item--left">{file.name}</div>
        <ProgressBar>
          <ProgressBarMeter progress={progressPercentage(file)} />
        </ProgressBar>
        <div className="list-item--right">
          {file.timemark ? (
            `${Math.floor(progressPercentage(file))}%`
          ) : (
            <Button isIcon onClick={() => removeFileAction(file)}>
              <FontAwesomeIcon icon="times" size="1x" />
            </Button>
          )}
        </div>
      </ListItem>
    ))}
  </List>
);

ConvertFilesPageBody.propTypes = {
  files: PropTypes.array,
  removeFileAction: PropTypes.func
};

export default ConvertFilesPageBody;
