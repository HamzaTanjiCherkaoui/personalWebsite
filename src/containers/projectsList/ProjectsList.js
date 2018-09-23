import React, { Component } from 'react'
import projects from '../../seeds/projects';
import Card from '../../components/card/Card';
export default class ProjectsList extends Component {
  render() {
    return (
      <React.Fragment>
        {projects.map(project => {
            return(
                <Card  key={project.id}{...project} effect="hover" />   
            )
        })}
      </React.Fragment>
    )
  }
}
