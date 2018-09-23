import React, {Component} from 'react';
import './App.css';
import Home from './containers/home/Home';
import ProjectDetails from './containers/projectDetails/ProjectDetails';
import {BrowserRouter as Router,  Route,  } from 'react-router-dom';
class App extends Component {
  render() {
    
    return (
      <Router>
      <React.Fragment>
        <div className="wrapper">
        <Route exact path="/" component={Home}/>
        <Route exact path="/projectDetails/:topicId" component={ProjectDetails}/>
                  </div>
                  <div className="footer">
                  Copyrights - 2018
                </div>
      </React.Fragment>
      </Router>
    );
  }
}

export default App;
