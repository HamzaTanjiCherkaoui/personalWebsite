import React, {Component} from 'react';
import Header from './components/header/Header';
import Card from './components/card/Card';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="wrapper">

          <Header
            logo
            ={logo}
            title="Hamza Tanji Cherkaoui"
            subTitle="passionate developer"
            rightNav=
                      { <ul className="contact">
                      <li> <a href=""> <i className="fas fa-at"></i> </a> </li> 
                        <li> <a href=""> <i className="fab fa-github-alt"></i> </a> </li>
                        <li> <a href=""> <i className="fab fa-linkedin"></i> </a> </li> 
                      </ul> }

            additionalDetails={<i className = "fas fa-map-marker-alt" > </i>}/>

          <div className="main">
            <div className="section">
              <h2>Work</h2>
              <ul className="no-padding">

             <Card 
                title="Shortcut.io"
                subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing."
                 effect="hover" 
             tags={[{label:"js" , color :"yellow" },{label:"react" , color : "light-blue" }]}
             />

              </ul>
            </div>
            <div className="section">
              <h2>Playground / Blog</h2>
              <ul className="blog">
                
              </ul>
            </div>
            <div className="section">
              <h2>Resume</h2>
              <ul className="no-padding">
                <li className="card ">
                  <a href="">
                    <div className="image">
                      <img src="https://avatars0.githubusercontent.com/u/2933736?s=460&v=4"/></div>
                  </a>
                  <div className="details">
                    <a href="projectDetails.html">
                      <div className="label">Hamza Tanji Cherkaoui</div>

                      <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
                      <div className="tags">
                        <div className="js">js</div>
                        <div className="react">react</div>
                      </div>
                    </a>
                    <div>
                      <a href="projectDetails.html"></a>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </div>
          <div className="footer">
            Copyrights - 2018
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default App;
