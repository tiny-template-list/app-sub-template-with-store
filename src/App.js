import React, { Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';

import Test from './pages/test';


const RouteExample = () => {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/with-store' : '/'}>
      <nav>
        <Link to="/">TEST</Link>
        
      </nav>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/" exact component={Test} />
         
        </Switch>
      </Suspense>
    </Router>
  );
};

export default function App() {
  return (
    <div className="app-main">
      <RouteExample />
    </div>
  );
}
