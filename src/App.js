import React, {Component} from 'react';
import './App.css';
import Home from './containers/home/Home';
import ProjectDetails from './containers/projectDetails/ProjectDetails';
import {BrowserRouter as Router,  Route,  } from 'react-router-dom';
class App extends Component {
  render() {
    
    return (
      <Router>
      
        <div className="wrapper">
        <Route exact path={process.env.PUBLIC_URL+"/"} component={Home}/>
        <Route exact path={process.env.PUBLIC_URL+"/projectDetails/:projectId"} component={ProjectDetails}/>
                  </div>
                  <div className="footer">
                  Copyrights - {(new Date()).getFullYear() }
                </div>
      
      </Router>
    );
  }
}

export default App;
