import React from 'react'
import {Form, FormGroup,FormControl,Col,ControlLabel,Button} from 'react-bootstrap'

class Login extends React.Component{
  render(){
    return(
      <div className='login-form'>
      <div>
        <img style={{display:'inline-block',marginBottom:'10px'}} src="//iconsflow.com/embed/yQBg4mbxEj5pNDrmEze2Ao7RGkarZ6Lz/icon1.svg" width="37" height="37" alt=""/>
        <h2 style={{fontFamily:"'Federant', cursive",fontStyle:'italic', display:'inline-block',fontSize:'30px', marginLeft:'3px'}}>AutoMite</h2>
      </div>
        <hr></hr>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={4}>
              Email
            </Col>
            <Col sm={7}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={4}>
              Password
            </Col>
            <Col sm={7}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Sign in</Button>
            </Col>
          </FormGroup>
        </Form>;
      </div>
    )
  }
}
export default Login
