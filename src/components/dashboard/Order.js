import React from 'react'
import { ListGroup } from 'react-bootstrap'


const Order = () => {
  return (
    <div>
      <div className="charts__right__title">
        <div>
          <h1>Order</h1>
          <p>Orderan </p>
        </div>
      </div>
      <div>
        <ListGroup>
          <ListGroup.Item action variant="danger">
            Info
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  )
}

export default Order
