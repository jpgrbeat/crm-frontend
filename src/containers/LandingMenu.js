import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'semantic-ui-react'
import {Grid,Clearfix,Col,Row} from 'react-bootstrap'
import LandingMenuCarousel from './LandingMenuCarousel'

class LandingMenu extends React.Component{

  render(){
    return(
      <React.Fragment>
        <LandingMenuCarousel/>
        <Grid>
          <Row style={{marginBottom:'15px', marginTop:'15px'}}>
          <Col xs={2}>
          </Col>
          <Col xs={'8'}>
            <input style={{marginLeft:'auto', marginRight:'2px'}} />
            <button style={{marginRight:'auto'}}>Search</button>
          </Col>
          <Col xs={'2'}>
          </Col>
          </Row>
          <Row style={{marginBottom:'10px'}}>
          <Col xs={'3'} style={{marginLeft:"20px"}} >
                <Icon circular  color='blue' size='big' name='calendar'/>
                <p style={{marginBottom:"0px"}}>Appointments</p>
          </Col>
          <Col xs={'3'} xsOffset={1}>

                <Icon circular color='blue' size='big' name='address card'/>
                <p style={{marginBottom:"0px"}}>Customers</p>
          </Col>
          <Col xs={'3'} xsOffset={1}>
                <Icon circular color='blue' size='big' style={{margin:'auto'}} name='car'/>
                <p style={{marginBottom:"0px"}}>Inventory</p>
          </Col>
          </Row>
          <Row>
          <Col xs={'3'} xsOffset={'2'}>
                <Icon circular color='blue' size='big' name='envelope outline' />
                <p style={{marginBottom:"0px"}}>Messages</p>
          </Col>
          <Col xs={'3'} xsOffset={'2'} >
                <Icon circular color='blue' size='big' name='tasks'/>
                <p style={{marginBottom:"0px"}}>To-Do</p>
          </Col>
          </Row>
          <Row>
            <Col xs={3} xsOffset={4} style={{paddingLeft:'30px'}}>
              <Icon circular color='blue' size='big' name='pencil' style={{paddingLeft:'5px'}}/>
              <p style={{textAlign:'center'}}>Trade Evaluation</p>
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    )
  }

}
export default LandingMenu
