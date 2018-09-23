import React, {Component} from 'react';
import './App.css';
import Home from './containers/home/Home';
import ProjectDetails from './containers/projectDetails/ProjectDetails';
import {BrowserRouter,  Route,  } from 'react-router-dom';
class App extends Component {
  render() {
    
    return (
      <BrowserRouter >
        <div className="wrapper">
        <Home/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/projectDetails/:topicId" component={ProjectDetails}/>
                  </div>
                  <div className="footer">
                  Copyrights - {(new Date()).getFullYear() }
                </div>
      
      </BrowserRouter>
    );
  }
}

export default App;
