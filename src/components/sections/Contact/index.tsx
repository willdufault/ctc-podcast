import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './index.module.scss'

export default function Contact() {
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
                          <Form.Control type="text" placeholder="First Last" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="firstlast@email.com" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>LinkedIn</Form.Label>
                          <Form.Control type="url" placeholder="https://www.linkedin.com/in/firstlast" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Subject</Form.Label>
                          <Form.Control type="text" placeholder="Your interest" />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                  <Col className='d-flex'>
                    <Form.Group className="mb-3 flex-grow-1 d-flex flex-column" controlId="formBasicEmail">
                      <Form.Label>Leave us a note</Form.Label>
                      <Form.Control as="textarea" type='text' placeholder='Anything else we should know' className={`flex-grow-1 ${styles['resize-none']}`} />
                    </Form.Group>
                  </Col>
                </Row>
                <Button type='submit' variant='orange'>Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  )
}