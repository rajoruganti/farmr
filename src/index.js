import React from 'react';
import ReactDOM from 'react-dom';
import PlotDetail from './components/PlotDetail';
import PublicListings from './components/PublicListings';
import Callback from './components/Callback';
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './utils/AuthService';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'


const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={PublicListings}/>
        <Route path="/PlotDetail" component={PlotDetail} onEnter={requireAuth} />
        <Route path="/callback" component={Callback} />
      </Router>
    </div>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'));