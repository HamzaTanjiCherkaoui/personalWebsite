import React, {Component} from 'react';
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';
import logo from '../../logo.png';
import PostsList from '../../components/postsList/PostsList';
import posts from '../../seeds/posts';

import ProjectsList from '../../containers/projectsList/ProjectsList';

class Home extends Component {

    render() {
        return(
        <React.Fragment>
        {this.renderHeader()}
      <div className="main">
        <div className="section">
          <h2>Work</h2>
          <ul className="no-padding">
                <ProjectsList />
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
      </React.Fragment>
        )
    }

    renderHeader() {
        return (
            <Header
            logo
            ={logo}
            title="Hamza Tanji Cherkaoui"
            subTitle="Passionate Developer , Morocco"
            rightNav=
                      { <ul className="contact">
                      <li> <a href=""> <i className="fas fa-at"></i> </a> </li> 
                        <li> <a href=""> <i className="fab fa-github-alt"></i> </a> </li>
                        <li> <a href=""> <i className="fab fa-linkedin"></i> </a> </li> 
                      </ul> }
    
            additionalDetails={<i className = "fas fa-map-marker-alt" > </i>}/>
        )
    }
}

export default Home;