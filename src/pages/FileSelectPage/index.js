import { connect } from 'react-redux';

import FileSelectPage from './FileSelectPage';
import { addFilesAction } from '../../redux/actions/FilesActions';

const mapStateToProps = ({ files }, ownProps) => ({
  ...files,
  ...ownProps
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
});

const mapDispatchToProps = {
  addFilesAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(FileSelectPage);
