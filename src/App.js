import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>

  <div class="wrapper">
  
		<div class="header">
			<div>
				<ul class="contact">
					<li>  <a href="#"><i class="fas fa-at"></i></a></li>
					<li> <a href="#"><i class="fab fa-github-alt"></i></a></li>
					<li> <a href="#"><i class="fab fa-linkedin"></i></a></li>
				</ul>
			</div>
		</div>
		<div class="brand">
			<img src="images/logo2.png" class="logo"/>
      <h1>
      Hamza Tanji Cherkaoui
       <span class="white"> |</span> 
       <span class="light">Passionate Developer , Morocco <i class="fas fa-map-marker-alt"></i> </span>
        </h1>
        
		</div>
		<div class="main">
			<div class="section">
				<h2>Work</h2>
				<ul class="no-padding">
        <li class="card hover">
        <a href="projectDetails.html">
          <div class="image red"></div>
          </a><div class="details"><a href="projectDetails.html">
            <div class="label">Shortcuts.io</div>
            <div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
            <div class="tags">
              <div class="js">js</div>
              <div class="react">react</div>
            </div>
            </a><div><a href="projectDetails.html">
            </a>
          </div></div></li>
					
					
				</ul>	
			</div>
			<div class="section">
				<h2>Playground / Blog</h2>
				<ul class="blog">
					<li>
					<p class="title">creating an Html5 canvas custom rendrer with react reconciliation </p>
					<p class="timestamp">18-08-2018</p>
					<a href="#">Read more</a>
				</li>
				<li>
					<p class="title">creating a template framework generator </p>
					<p class="timestamp">18-08-2018</p>
					<a href="#">Read more</a>
				</li>
				<li>
					<p class="title">creating a terminal based personal website </p>
					<p class="timestamp">18-08-2018</p>
					<a href="#">Read more</a>
				</li>
				<li>
					<p class="title">creating a custom rendrer with react reconciliation </p>
					<p class="timestamp">18-08-2018</p>
					<a href="#">Read more</a>
				</li>
				<li>
					<p class="title">creating a WebMethods DocumentType generator</p>
					<p class="timestamp">18-08-2018</p>
					<a href="#">Read more</a>
				</li>
					
				<li>
					<p class="title">creating a custom webMethods mapper</p>
					<p class="timestamp">18-08-2018</p>
					<a href="#">Read more</a>
				</li>
					
				</ul>	
			</div>
			<div class="section">
				<h2>Resume</h2>
        <ul class="no-padding">
        <li class="card ">
						<a href="">
            <div class="image">
            <img src="https://avatars0.githubusercontent.com/u/2933736?s=460&v=4"/></div>
							</a><div class="details"><a href="projectDetails.html">
              <div class="label">Hamza Tanji Cherkaoui</div>
								
								<div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
								<div class="tags">
									<div class="js">js</div>
									<div class="react">react</div>
								</div>
								</a><div><a href="projectDetails.html">
								</a>
							</div></div></li>
					
				</ul>
			</div>
		</div>
		<div class="footer">
			Copyrights - 2018 
		</div>
	</div>

      </React.Fragment>
    );
  }
}

export default App;
