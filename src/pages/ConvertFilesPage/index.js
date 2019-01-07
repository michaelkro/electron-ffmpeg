import { connect } from 'react-redux';

import ConvertFilesPage from './ConvertFilesPage';
import {
  addFilesAction,
  convertFilesAction,
  clearFilesAction,
  removeFileAction
} from '../../redux/actions/FilesActions';
import {
  filesInProgress,
  allFilesConverted
} from '../../redux/selectors/FilesSelectors';

const mapStateToProps = ({ files: { files } }, ownProps) => ({
  ...ownProps,
  files,
  filesInProgress: filesInProgress(files),
  allFilesConverted: allFilesConverted(files)
});

const mapDispatchToProps = {
  addFilesAction,
  convertFilesAction,
  clearFilesAction,
  removeFileAction
};

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ConvertFilesPage);
