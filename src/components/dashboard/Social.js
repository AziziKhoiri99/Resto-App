import React from 'react'
import { ListGroup } from 'react-bootstrap'


const Social = () => {
  return (
    <div>
      <div className="charts__right__title">
        <div>
          <h1>Social Media</h1>
          <p></p>
        </div>
      </div>
      <div>
        <ListGroup>
          <ListGroup.Item action variant="light">
            Light
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  )
}

export default Social
