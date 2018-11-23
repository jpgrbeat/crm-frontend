import React from 'react'
import {Navbar} from 'react-bootstrap'

const Footer=()=>{
  return(
    <Navbar fixedBottom={true}>
      <Navbar.Header>
        <Navbar.Brand>
          <p>Demo</p>
        </Navbar.Brand>
      </Navbar.Header>
        <Navbar.Text>
          Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
        </Navbar.Text>
        <Navbar.Text pullRight>Created By Josh Miller</Navbar.Text>
    </Navbar>
  )
}
export default Footer
