import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';

const ProjectList = ({projects}) =>{
    return(
    <div className="project-list section">
    {projects && projects.map(project =>{
        return(
            
             <Link to={'/project/' + project.id} key={project.id}>
{/*              
             <div className="card-content">
          
          <span className="card-title">Today's Temperature is : {project.temperature}</span>
          <span className="card-title">Today's Humidity is : {project.humidity}</span>
          <span className="card-title">Today's Barometric Pressure is : {project.barometricpressure}</span>
          <span className="card-title">Today's WaterMoisture is : {project.watermoisture}</span>
        </div> */}
              <ProjectSummary project={project}/>
        
             </Link>
             
         )
     })}
     
          </div>
          
      )
  }

 export default ProjectList;
