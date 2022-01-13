import React from 'react'
import { ListGroup } from 'react-bootstrap'


const Datamaster = () => {
  return (
    <div>
      <div>
        <div className="charts__right__title">
          <div>
            <h1>Dashboard Data Master</h1>
            <p>File Data </p>
          </div>
        </div>
      </div>
      <div>
        <ListGroup>
          <ListGroup.Item action variant="danger">
            Danger
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  )
}

export default Datamaster
