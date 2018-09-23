import React, { Component } from 'react'
import projectIsssues from '../../seeds/projectIssues';
import Card from '../../components/card/Card';

export default class ProjectIssues extends Component {
  render() {
    return (
      <React.Fragment>
        {projectIsssues.map(projectIsssue=>{
            return (
                <Card key={projectIsssue.issue} title={projectIsssue.issue} effect="hover" tags={[projectIsssue.tag]}/>
            )
        })}
      </React.Fragment>
    )
  }
}
