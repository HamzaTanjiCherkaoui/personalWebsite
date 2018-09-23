import React, {Component} from 'react';
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';
import logo from '../../logo.png';
import PostsList from '../../components/postsList/PostsList';
import posts from '../../seeds/posts';

import ProjectsList from '../../containers/projectsList/ProjectsList';

class ProjectDetails extends Component {

    render() {
        return(
        <React.Fragment>
        {this.renderHeader()}
      <div className="main">
        <div className="section">
        <h2>main idea / inspiration </h2>
        <ul class="no-padding">
            <li class="card">        
                    <div class="details">
                        <h1>Lorem ipsum dolor.</h1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, hic.
                        <h1>Lorem ipsum dolor.</h1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati fuga qui unde, magnam suscipit fugit, totam quasi vitae repellendus molestiae nulla similique in illum. Debitis nisi vel, ab. Laborum, earum?
                        </div>
                    </li>
        </ul>
        </div>
        <div className="section">
        <h2>open issues</h2>
          
        </div>
        <div className="section">
        <h2>Ressources and Articles </h2>
          
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
            title="Shortcuts.io"
            subTitle="Lorem ipsum dolor sit."
            rightNav=
                      { <ul className="contact">
                      <li> <a href=""> <i className="fas fa-at"></i> </a> </li> 
                        <li> <a href=""> <i className="fab fa-github-alt"></i> </a> </li>
                        <li> <a href=""> <i className="fab fa-linkedin"></i> </a> </li> 
                      </ul> }
    
            additionalDetails= {
                <React.Fragment>
                <span class="green-color">Live</span>
            <span> <a href="#"><i class="repo fab fa-github"></i></a></span>
            </React.Fragment>
         }/>
        )
    }
}

export default ProjectDetails;