import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function Subscribe() {
  return (
    <>
      <div>
        <Container className='pt-4 pb-5'>
          <h3>Subscribe Now</h3>
          <Row className='row-gap-3'>
            <Col xs={12} sm={6} lg={3}>
              <Button variant='outline-orange-border rounded-pill' size='lg'>&lt;Logo&gt; Subscribe</Button>
            </Col>
            <Col xs={12} sm={6} lg={3}>
              <Button variant='outline-orange-border rounded-pill' size='lg'>&lt;Logo&gt; Subscribe</Button>
            </Col>
            <Col xs={12} sm={6} lg={3}>
              <Button variant='outline-orange-border rounded-pill' size='lg'>&lt;Logo&gt; Subscribe</Button>
            </Col>
            <Col xs={12} sm={6} lg={3}>
              <Button variant='outline-orange-border rounded-pill' size='lg'>&lt;Logo&gt; Subscribe</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}