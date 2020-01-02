// decide which page to render

import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CoursesPage from './CoursesPage';
import Header from './common/Header';
import ManageCoursePage from './ManageCoursePage';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from './404';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  // manual router with browser default functions
  // function getPage() {
  //   // downside of this simple router: it posts back to the server
  //   const route = window.location.pathname;
  //   if (route === '/about') return <AboutPage />;
  //   if (route === '/courses') return <CoursesPage />;
  //   return <HomePage />;
  // }
  // //   return getPage();
  // return (
  //   <div className="container-fluid">
  //     <Header />
  //     {getPage()}
  //   </div>
  // );

  // react router
  // switch order matters, last one is the default option
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Redirect from="/about-page" to="about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
