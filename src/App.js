import React, { Component } from 'react';
import {Route,Switch,Link} from 'react-router-dom'
import './App.css';
import NavBar from './containers/NavBar'
import Login from './containers/Login'
import LandingMenu from './containers/LandingMenu'
import Profile from './containers/Profile'
import Footer from './components/Footer'
import AppointmentsLandingPage from './containers/AppointmentsLandingPage'
class App extends Component {

  render() {
    return (
      <React.Fragment>
      <NavBar/>
      <Switch>
      <Route exact to='/' render={()=>(
          <React.Fragment>
            <AppointmentsLandingPage/>
          </React.Fragment>
      )}/>
      <Route to path='/menu' render={(props)=><LandingMenu/>}/>
      <Route to path='/profile' render={(props)=><Profile/>}/>
      </Switch>
      <Footer/>
      </React.Fragment>
    )
  }
}

export default App;
