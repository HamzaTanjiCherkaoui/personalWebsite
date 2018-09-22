import React, {Component} from 'react';
import Header from './components/header/Header';
import Card from './components/card/Card';
import logo from './logo.png';
import './App.css';
import PostsList from './containers/postsList/PostsList';
import posts from './seeds/posts';

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
              <PostsList posts={posts} />
            </div>
            <div className="section">
              <h2>Resume</h2>
              <ul className="no-padding">
              <Card 
              title="Hamza Tanji Cherkaoui"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing."
              image = {
                <img src="https://avatars0.githubusercontent.com/u/2933736?s=460&v=4"/>
              }
           tags={[{label:"js" , color :"yellow" },{label:"react" , color : "light-blue" }, {label:"webMethods",color:"light-blue"}]}
           />

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
