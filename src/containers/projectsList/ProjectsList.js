import React, { Component } from 'react'
import projects from '../../seeds/projects';
import Card from '../../components/card/Card';
import {Link }from 'react-router-dom';
export default class ProjectsList extends Component {
  render() {
    return (
      <React.Fragment>
        {projects.map(project => {
            return(
                <Link to={`${process.env.PUBLIC_URL}/projectDetails/${project.id}`} key={project.id} >
                <Card  {...project} effect="hover" />   
                </Link>
            )
        })}
      </React.Fragment>
    )
  }
}
