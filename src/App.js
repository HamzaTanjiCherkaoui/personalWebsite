import React, {Component} from 'react';
import './App.css';
import Home from './containers/home/Home';
import ProjectDetails from './containers/projectDetails/ProjectDetails';
import {BrowserRouter,  Route,  } from 'react-router-dom';
class App extends Component {
  render() {
console.log(process.env.PUBLIC_URL);
    return (

      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <React.Fragment >
        <div className="wrapper">
        <Route exact path="/" component={Home}/>
        <Route exact path="/projectDetails/:topicId" component={ProjectDetails}/>
                  </div>
                  <div className="footer">
                  Copyrights - {(new Date()).getFullYear() }
                </div>
      </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
