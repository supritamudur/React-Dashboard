import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';
//import ProjectDetails from './ProjectDetails';
import './pro.css';
//import ProjectDetails from './ProjectDetails';
class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      humidity: '',
      barometricpressure: '',
      watermoisture: '',
      isToggleOn1: true,
      isToggleOn2: true,
      isToggleOn3: true,
      isToggleOn4: true,
      isToggleOn11: false,
      isToggleOn22: false,
      isToggleOn33: false,
      isToggleOn44: false
    };
  }
  state = {
    A: "1",
    B: "0"

  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    console.log("Submitted");
    this.props.createProject(this.state);

    this.props.history.push('/');
    

  }

  // handlecheck1 = (e) => {

  //   alert("Fan On");
  //   console.log("Fan On");
  // }

  handleClick1 = () => {
    this.setState(state => ({
      isToggleOn1: !state.isToggleOn1,
      isToggleOn11: !state.isToggleOn11
    }));
    this.state.isToggleOn1===true ? alert("Fan ON") : alert("Fan OFF");
    console.log("Fan ON")
    
  }
  handleClick2 = () => {
    this.setState(state => ({
      isToggleOn2: !state.isToggleOn2,
      isToggleOn22: !state.isToggleOn22,
    }));
    this.state.isToggleOn2===true ? alert("Bulb ON") : alert("Bulb OFF");
    
  }
  handleClick3 = () => {
    this.setState(state => ({
      isToggleOn3: !state.isToggleOn3,
      isToggleOn33: !state.isToggleOn33
    }));
    this.state.isToggleOn3===true ? alert("Fridge ON") : alert("Fridge OFF");
    
  }
  handleClick4 = () => {
    this.setState(state => ({
      isToggleOn4: !state.isToggleOn4,
      isToggleOn44: !state.isToggleOn44
    }));
    this.state.isToggleOn4===true ? alert("TV ON") : alert("TV OFF");

  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container">

        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="white-text" 
          style={{ textAlign: "center",backgroundColor:"black",lineHeight:"200%"}}>Xolcano IOT DashBoard</h5>
      
          <div className="buttons" style={{ display: "table-caption" }}>
            <div className="bttns">
            <div className="bttns1">
              <button type="button" className="hello"
                // onClick={this.props.history.push('/create')}
                onClick={this.handleClick1}
                style={{ backgroundColor: "lightgray", width: "80px", height: "60px", 
                cursor: "pointer", display: "inline-block" }}><strong>Fan</strong>
              </button>
              <div className="btn1">

                <span class="red">{this.state.isToggleOn1 ? 'OFF' : ''}</span>
                &nbsp;
            <span class="green">{this.state.isToggleOn11 ? 'ON' : ''}</span>
              </div>
              <button type="button" className="hello" onClick={this.handleClick2}
                style={{ backgroundColor: "lightblue", width: "80px", height: "60px", cursor: "pointer", display: "inline-block" }}><strong>Bulb</strong></button>

              <div className="btn2">
                <span class="red">{this.state.isToggleOn2 ? 'OFF' : ''}</span>
                &nbsp;
            <span class="green">{this.state.isToggleOn22 ? 'ON' : ''}</span>
              </div>
              </div>
              <button type="button" className="hello" onClick={this.handleClick3}
                style={{ backgroundColor: "lightpink", width: "80px", height: "60px", cursor: "pointer", display: "inline-block" }}><strong>Fridge</strong></button>
              <div className="btn3">

                <span class="red">{this.state.isToggleOn3 ? 'OFF' : ''}</span>
                &nbsp;
            <span class="green">{this.state.isToggleOn33 ? 'ON' : ''}</span>
              </div>
              <button type="button" className="hello" onClick={this.handleClick4}
                style={{ backgroundColor: "lightgreen", width: "80px", height: "60px", cursor: "pointer", display: "inline-block" }}>
                <strong>Tv</strong></button>

              <div className="btn4">
                <span class="red">{this.state.isToggleOn4 ? 'OFF' : ''}</span>
                &nbsp;
            <span class="green">{this.state.isToggleOn44 ? 'ON' : ''}</span>
              </div>



            </div>
          </div>
          
      <div className="text" style={{float:"right"}}>
       <fieldset style={{position:"absolute",
    top: "267px",
    right:"370px",
    width:"21%",
    height:"65%"}}>
      <div className="card-content">
      <span className="card-title"><b>Today's Temperature is : {this.state.temperature}</b><input type="number" id="temperature" onChange={this.handleChange}></input></span>
            <span className="card-title"><b>Today's Humidity is : {this.state.humidity}</b><input type="number" id="humidity" onChange={this.handleChange}></input></span>
            <span className="card-title"><b>Today's Barometric Pressure is : {this.state.barometricpressure}</b><input type="number" id="barometricpressure" onChange={this.handleChange}></input></span>
            <span className="card-title"><b>Today's WaterMoisture is : {this.state.watermoisture}</b><input type="number" id="watermoisture" onChange={this.handleChange}></input></span>
            <p>{this.content}</p>
            
          </div>
          <button target="_self" className="btn pink lighten-1" onClick={this.handleSubmit}
                  style={{ display: "block" }}>Submit </button>
 
          </fieldset>
          
          
      {/* <fieldset style={{position:"absolute",
    top: "267px",
    right:"370px",
    width:"21%",
    height:"65%"}}>
    Temperature is:
    <textarea placeholder="write anything"
                  style={{ width: "250px", height: "50px", display: "inline-block" }}
                  id="content" onChange={this.handleChange}></textarea>
                  &nbsp;
                  <br></br>
    Humidity is:
    <textarea placeholder="write anything"
                  style={{ width: "250px", height: "50px", display: "inline-block" }}
                  id="content" onChange={this.handleChange}></textarea>
                  &nbsp;
                  <br></br>
    WaterMoisture is:  
    <textarea placeholder="write anything"
                  style={{ width: "250px", height: "50px", display: "inline-block" }}
                  id="content" onChange={this.handleChange}></textarea>
                  &nbsp;
                  <br></br>
                  
    Barometricpressure is:  
    <textarea placeholder="write anything"
                  style={{ width: "250px", height: "50px", display: "inline-block" }}
                  id="content" onChange={this.handleChange}></textarea>
                  &nbsp;
                 </fieldset> 
                  */}
     
  
        

      </div>

        </form>
      </div>

    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null ;
  return {
    project: project,
    auth: state.firebase.auth
  }
}

// const mapStateToProps = (state) => {
//   return {
//     auth: state.firebase.auth
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapDispatchToProps,mapStateToProps)(CreateProject);

