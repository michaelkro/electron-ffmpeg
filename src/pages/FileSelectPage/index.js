import { connect } from 'react-redux';

import FileSelectPage from './FileSelectPage';
import * as FileSelectPageActions from './FileSelectPageActions';

const mapStateToProps = ({ fileSelectPage }, ownProps) => ({
  ...fileSelectPage,
  ...ownProps
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
});

export default connect(
  mapStateToProps,
  FileSelectPageActions,
  mergeProps
)(FileSelectPage);
