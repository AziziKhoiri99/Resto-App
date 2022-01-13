import React from 'react'
import { ListGroup } from 'react-bootstrap'


const User = () => {
  return (
    <div>
      <div className="charts__right__title">
        <div>
          <h1>Dashboard Data Master</h1>
          <p>File Data </p>
        </div>
      </div>
      <div>
        <ListGroup>
          <ListGroup.Item action variant="dark">
            Dark
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  )
}

export default User
