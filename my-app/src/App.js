import React, { Component } from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import DashBoard from './Components/dashboard/DashBoard';
import ProjectDetaills from './Components/projects/ProjectDetails';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';
import CreateProject from '../src/Components/projects/CreateProject';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path='/' component={DashBoard} />
          <Route path='/project/:id' component={ProjectDetaills} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
