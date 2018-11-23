import React from 'react'
import {Carousel, Button} from 'react-bootstrap'


const LandingMenuCarousel=()=>{
  return(
    <Carousel>
      <Carousel.Item>
      <div style={{textAlign:'center'}}>
        <h1>Task 1</h1>
        <h3>Call Joe Schmoe</h3>
        <p>Task 1 day old</p>
        <Button>Go to Task</Button>
      </div>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{textAlign:'center'}}>
          <h1>Task 2</h1>
          <h3>Follow up with Jane Doe</h3>
          <p>Set today</p>
          <Button>Go to Task</Button>
        </div>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{textAlign:'center'}}>
        <h1>Task 3</h1>
        <h3>Email Eddie Spaghetti</h3>
        <p>Set Today</p>
        <Button>Go to Task</Button>
      </div>
        <Carousel.Caption>

        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
  )
}
export default LandingMenuCarousel
