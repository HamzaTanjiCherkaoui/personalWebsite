import React, {Component} from 'react';
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';
import logo from '../../logo.png';
import PostsList from '../../components/postsList/PostsList';
import posts from '../../seeds/posts';

import ProjectsList from '../../containers/projectsList/ProjectsList';
import projectDetails from '../../seeds/projectDetails';
import ProjectIssues from '../../containers/projectIssues/ProjectIssues';

class ProjectDetails extends Component {
     

    render() {
        return(
        <React.Fragment>
        {this.renderHeader()}
      <div className="main">
        <div className="section">
        <h2>main idea / inspiration </h2>
        <ul className="no-padding">
            <li className="card">        
                    <div className="main-idea">
                        {projectDetails.idea}
                        </div>
                    </li>
        </ul>
        </div>
        <div className="section">
        <h2>open issues</h2>
          <ProjectIssues/>
        </div>
        <div className="section">
        <h2>Ressources and Articles </h2>
        <PostsList posts={posts} />
        </div>
      </div>
      </React.Fragment>
        )
    }

    renderHeader() {
        return (
            <Header
            logoColor="red"
            title={projectDetails.title}
            subTitle={projectDetails.subTitle}
            rightNav=
                      { <ul className="contact">
                      <li> <a href=""> <i className="fas fa-at"></i> </a> </li> 
                        <li> <a href=""> <i className="fab fa-github-alt"></i> </a> </li>
                        <li> <a href=""> <i className="fab fa-linkedin"></i> </a> </li> 
                      </ul> }
    
            additionalDetails= {
                <React.Fragment>
                <span className="green-color">{projectDetails.status}</span>
            <span> <a href={projectDetails.github}><i className="repo fab fa-github"></i></a></span>
            </React.Fragment>
         }/>
        )
    }
}

export default ProjectDetails;