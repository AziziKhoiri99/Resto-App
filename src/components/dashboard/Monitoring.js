import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'


const Monitoring = () => {
  return (
    <div>
      <div className="charts__right__title">
        <div>
          <h1>Monitoring</h1>
          <p></p>
        </div>
      </div>

      <Row>
        <Col>
          <Form.Group as={Row} className="mb-4 fgs" controlId="exampleForm.ControlTextarea1">
            <Form.Label column sm="2">
              Nama Menu
            </Form.Label>
            <Col>
              <Form.Control className="fcs" type="text" placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4 fgs" controlId="exampleForm.ControlTextarea1">
            <Form.Label column sm="2">
              Est Waktu (menit)
            </Form.Label>
            <Col>
              <Form.Control className="fcs" type="text" placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4 fgs" controlId="exampleForm.ControlTextarea1">
            <Form.Label column sm="2">
              Deskripsi
            </Form.Label>
            <Col>
              <Form.Control className="fcs" type="textarea" placeholder="" />
            </Col>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group as={Row} className="mb-4 fgs" controlId="exampleForm.ControlTextarea1">
            <Form.Label column sm="2">
              Kategori
            </Form.Label>
            <Col>
              <Form.Control className="fcs" type="text" placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4 fgs" controlId="exampleForm.ControlTextarea1">
            <Form.Label column sm="2">
              Harga
            </Form.Label>
            <Col>
              <Form.Control className="fcs" type="number" placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4 fgs" controlId="exampleForm.ControlTextarea1">
            <Form.Label column sm="2">
              Deskripsi
            </Form.Label>
            <Col>
              <Form.Control as="textarea" rows={3} />
            </Col>
          </Form.Group>
        </Col>
      </Row>
    </div>
  )
}

export default Monitoring
