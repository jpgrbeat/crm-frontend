import React from 'react'
import {Icon} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import {Navbar,Nav,NavItem} from 'react-bootstrap'
export default class NavBar extends React.Component{

  render(){
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
          <a href="#brand">
          <img style={{float:'left'}}src="//iconsflow.com/embed/yQBg4mbxEj5pNDrmEze2Ao7RGkarZ6Lz/icon3.svg" width="35" height="35" alt=""/>
          <h2 style={{color:'#efefea', float:'right', marginTop:'2px'}}>AutoMite</h2>
          </a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href='#'>
            Home
          </NavItem>
          <NavItem eventKey={2} href='#'>
            Profile
          </NavItem >
          <NavItem eventKey={3} href='#'>
            About
          </NavItem>
          <NavItem eventKey={4} href='#'>
            Logout
          </NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      )
    }
}


// <div className='row'>
// {localStorage.token ?
// <div id='nav-button'className='col-2'>
//   <button  onClick={this.navMenuTap}>
//     <Icon size='large' name='bars'></Icon>
//   </button>
// </div> : null}
// <div id='header-bar' className="col-10">
//   <h4>CRM logo</h4>
// </div>
//
// </div>
// <div className= 'row'>
//   <div id='home-menu' className='menu-span' style={{display:'none'}}>
//     <p>Home</p>
//     <p>Profile</p>
//     <p>Reports</p>
//     <p>Logout</p>
//     <p>About</p>
//   </div>
// </div>
