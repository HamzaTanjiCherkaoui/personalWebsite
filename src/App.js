import React, {Component} from 'react';
import './App.css';
import Home from './containers/home/Home';
import ProjectDetails from './containers/projectDetails/ProjectDetails';
class App extends Component {
  render() {
    
    return (
      <React.Fragment>
        <div className="wrapper">
        <ProjectDetails/>
                  </div>
                  <div className="footer">
                  Copyrights - 2018
                </div>
      </React.Fragment>
    );
  }
}

export default App;
