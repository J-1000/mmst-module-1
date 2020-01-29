import React from 'react';
import { myProjects } from './Projects';
import { Link } from 'react-router-dom';

const projectDetails = (props) => {
  console.log(props)

  const { params } = props.match;
  const foundProject = myProjects.find(project => project.id === params.projectId);

  return (
    <div>
      <h2>{ foundProject.name } <span style={{fontSize:"14px"}}>{ foundProject.year }</span></h2>
      <h3>Used technologies: { foundProject.technologies }</h3>
      <p>{ foundProject.description }</p>
      <Link to='/projects'>Back</Link>
    </div>
  )
}

export default projectDetails;