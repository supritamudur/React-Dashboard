import React from 'react';
//import moment from 'moment';
const ProjectSummary =({project})=>{
    return(

<div className="card z-depth-0 project-summary">
    <div className="card-content grey-text text-darken-3">
{/*     
        {/* <span className="card-title">{project.title}</span> 
        <span className="card-title">{project.content}</span>
        <span className="card-title">{project.temperature}</span>
        <span className="card-title">{project.humidity}</span>
        <span className="card-title">{project.barometricpressure}</span>
        <span className="card-title">{project.watermoisture}</span> */}
        
        <div className="cards">
          
          <span className="card-title">Today's Temperature is : {project.temperature}</span>
          <span className="card-title">Today's Humidity is : {project.humidity}</span>
          <span className="card-title">Today's Barometric Pressure is : {project.barometricpressure}</span>
          <span className="card-title">Today's WaterMoisture is : {project.watermoisture}</span>
        </div>
        <p>Posted By the {project.authorFirstName} {project.authorLastName}</p>
    </div>
    
</div>

)
}

export default ProjectSummary;
