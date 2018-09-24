import React, { Component } from 'react'
import Header from '../../components/header/Header';
import posts from '../../seeds/posts';

export default class Post extends Component {
  render() {
    const {match} = this.props;
    const postId =match.params.postId;
    
    const post = posts.find(p => p.id == postId);
    if(!post) {
        return (<div>Post Not found</div>)
    }

    return (
      <React.Fragment>
      <Header
      
      rightNav=
                { <ul className="contact">
                <li> <a href=""> <i className="fas fa-at"></i> </a> </li> 
                  <li> <a href=""> <i className="fab fa-github-alt"></i> </a> </li>
                  <li> <a href=""> <i className="fab fa-linkedin"></i> </a> </li> 
                </ul> }

      />

      <div className="brand">
			
			<h1 className="post-title">{post.title} <span className="white"> |</span> <span className="light">{post.timestamp}</span>
			</h1>
		</div>
		<div className="main">
        {!post.content && <div className="post-section" ><h2>Under Construction </h2></div>}   
        {post.content && <div className="post-section" dangerouslySetInnerHTML={{ __html: post.content}}>
            
        </div>} 
        
			<div className="clearfix"></div>
		</div>
      </React.Fragment>
    )
  }
}
