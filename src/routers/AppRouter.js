import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import FileSelectPageContainer from '../pages/FileSelectPage';
import ConvertFilesPageContainer from '../pages/ConvertFilesPage';
import { CONVERT_FILES_PATH, ROOT_PATH } from './paths';

const AppRouter = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route
          path={CONVERT_FILES_PATH}
          component={ConvertFilesPageContainer}
        />
        <Route path={ROOT_PATH} component={FileSelectPageContainer} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
