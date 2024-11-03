import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './index.module.scss'
import React from 'react'

export default function Contact() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [linkedIn, setLinkedIn] = React.useState('')
  const [subject, setSubject] = React.useState('')
  const [note, setNote] = React.useState('')
  
  return (
    <>
      <div id='contact' className='bg-body-tertiary'>
        <Container className='pt-4 pb-5'>
          <h3>Contact Us</h3>
          <Card>
            <Card.Body>
              <h6>Be a Guest on Coffee to Campfire!</h6>
              <Form>
                <Row className='flex-column flex-lg-row'>
                  <Col lg={7}>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Full name</Form.Label>
                          <Form.Control type="text" placeholder="First Last" value={name} onChange={(event) => {setName(event.target.value)}}/>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="firstlast@email.com" value={email} onChange={(event) => {setEmail(event.target.value)}}/>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>LinkedIn</Form.Label>
                          <Form.Control type="url" placeholder="https://www.linkedin.com/in/firstlast" value={linkedIn} onChange={(event) => {setLinkedIn(event.target.value)}}/>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Subject</Form.Label>
                          <Form.Control type="text" placeholder="Your interest" value={subject} onChange={(event) => {setSubject(event.target.value)}}/>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                  <Col className='d-flex'>
                    <Form.Group className="mb-3 flex-grow-1 d-flex flex-column" controlId="formBasicEmail">
                      <Form.Label>Leave us a note</Form.Label>
                      <Form.Control as="textarea" type='text' placeholder='Anything else we should know' className={`flex-grow-1 ${styles['resize-none']}`} onChange={(event) => {setNote(event.target.value)}}/>
                    </Form.Group>
                  </Col>
                </Row>
                <a href={`https://docs.google.com/forms/d/e/1FAIpQLSdmSQSnMWMc827cg9cF5c-kFoToR_B4z6-7lfzOIwCycx4KJA/viewform?entry.213280235=${name}&entry.114438050=${email}&entry.760820466=${linkedIn}&entry.403270838=${subject}&entry.1295928621=${note}`} target='_blank'>
                  <Button variant='orange'>Submit</Button>
                </a>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  )
}