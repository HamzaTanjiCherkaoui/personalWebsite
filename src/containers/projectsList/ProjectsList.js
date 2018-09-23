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
                <Link to={`/projectDetails/${project.id}`}>
                <Card  key={project.id}{...project} effect="hover" />   
                </Link>
            )
        })}
      </React.Fragment>
    )
  }
}
