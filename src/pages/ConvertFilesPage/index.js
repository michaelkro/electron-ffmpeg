import { connect } from 'react-redux';

import ConvertFilesPage from './ConvertFilesPage';
import * as ConvertFilesPageActions from './ConvertFilesPageActions';
import {
  filesInProgress,
  allFilesConverted
} from './ConvertFilesPageSelectors';

const mapStateToProps = ({ fileSelectPage: { files } }, ownProps) => ({
  ...ownProps,
  files,
  filesInProgress: filesInProgress(files),
  allFilesConverted: allFilesConverted(files)
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
});

export default connect(
  mapStateToProps,
  ConvertFilesPageActions,
  mergeProps
)(ConvertFilesPage);
