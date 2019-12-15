import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
//import ProjectSummary from './ProjectSummary';

const ProjectDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to='/create' /> 
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          {/* <div className="card-content">
          
            <span className="card-title">Today's Temperature is : {project.temperature}</span>
            <span className="card-title">Today's Humidity is : {project.humidity}</span>
            <span className="card-title">Today's Barometric Pressure is : {project.barometricpressure}</span>
            <span className="card-title">Today's WaterMoisture is : {project.watermoisture}</span>
            <p>{project.content}</p>
          </div>
          
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>2nd September, 2am</div>
          </div>
           */}
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
 
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails)