import React from 'react'
import {Grid,Col,Row,Button,Modal,Dropdown,MenuItem,DropdownButton,Table} from 'react-bootstrap'

class AppointmentsLandingPage extends React.Component{
  state={
    activeItem:'All'
  }
  menuSelect=(string)=>{
    this.setState({activeItem:string})
  }
  render(){
    return(
      <React.Fragment>
        <Grid>
          <Row style={{marginBottom:'20px'}}>
            <Col xs={4} style={{paddingRight:'5px'}}>
                <DropdownButton title={'Filter by:'}>
                  <MenuItem onSelect={()=>this.menuSelect('New')}>New</MenuItem>
                  <MenuItem onSelect={()=>this.menuSelect('Used')}>Used</MenuItem>
                  <MenuItem onSelect={()=>this.menuSelect('All')}>All</MenuItem>
                  <MenuItem divider />
                  <MenuItem onSelect={()=>this.menuSelect('Model')}>Makes</MenuItem>
                </DropdownButton>
            </Col>
            <Col xs={2}>
              <h4 style={{textAlign:'left', paddingTop:'10px'}}>{this.state.activeItem}</h4>
            </Col>
            <Col xs={5}>
              <Button> Add Appointment</Button>
            </Col>
          </Row>
          <Row>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Year</th>
                  <th>Make</th>
                  <th>Model</th>
                  <th>Type</th>
                </tr>
              </thead>
            </Table>
          </Row>
        </Grid>
      </React.Fragment>
    )
  }
}
export default AppointmentsLandingPage
