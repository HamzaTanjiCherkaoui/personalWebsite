import React, {Component} from 'react';
import Header from '../../components/header/Header';
import PostsList from '../../components/postsList/PostsList';
import posts from '../../seeds/posts';

import API from '../../seeds/projectDetails';
import ProjectIssues from '../../containers/projectIssues/ProjectIssues';

class ProjectDetails extends Component {
     

    render() {
        const {match} = this.props;
        const projectId =match.params.projectId;
        
        const projectDetails = API.get(projectId);
        
        if(!projectDetails)
        return(
            <React.Fragment> project not found </React.Fragment>
        )
        return(
        <React.Fragment>
        {this.renderHeader(projectDetails)}
      <div className="main">
        <div className="section">
        <h2>main idea / inspiration </h2>
        <ul className="no-padding">
            <li className="card">        
                    <div className="main-idea" dangerouslySetInnerHTML={{ __html: projectDetails.idea }}>
                        
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

    renderHeader({title,subTitle,status,github}) {
        
        return (
            <Header
            logoColor="red"
            title={title}
            subTitle={subTitle}
            rightNav=
                      { <ul className="contact">
                      <li> <a href=""> <i className="fas fa-at"></i> </a> </li> 
                        <li> <a href=""> <i className="fab fa-github-alt"></i> </a> </li>
                        <li> <a href=""> <i className="fab fa-linkedin"></i> </a> </li> 
                      </ul> }
    
            additionalDetails= {
                <React.Fragment>
                <span className="green-color">{status}</span>
            <span> <a href={github}><i className="repo fab fa-github"></i></a></span>
            </React.Fragment>
         }/>
        )
    }
}

export default ProjectDetails;