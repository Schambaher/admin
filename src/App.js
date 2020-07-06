import React from 'react';

import UserPage from './page/userPage';
import TourismPage from './page/tourismPage';
import DepartmentPage from './page/departmentPage';
import CommentPage from './page/commentPage';
import login from './page/login';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App= () => {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={login} />
        <Route exact path="/login" component={login} />
        <Route exact path="/userPage" component={UserPage} />
        <Route exact path="/tourismPage" component={TourismPage} />
        <Route exact path="/departmentPage" component={DepartmentPage} />
        <Route exact path="/commentPage" component={CommentPage} />
      </Router>
    </React.Fragment>
  );
}

export default App;
