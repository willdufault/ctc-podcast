import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import spotifyButton from '../../../assets/images/spotify-button.png'
import applePodcastsButton from '../../../assets/images/apple-podcasts-button.png'
import linkedInButton from '../../../assets/images/linkedin-button.png'
import instagramButton from '../../../assets/images/instagram-button.png'

export default function Subscribe() {
  return (
    <>
      <Container id='subscribe' className='pt-4 pb-5'>
        <h3>Subscribe Now</h3>
        <Row className='row-gap-3 justify-content-between' xxl={5}>
          <Col xs={8} sm={6} md={5} lg={3} xl={3}>
            <a href="https://www.example.com">
              <Button variant='outline-orange-border' size='lg' className='rounded-pill'>
                <Image src={spotifyButton} fluid className='px-1'></Image>
              </Button>
            </a>
          </Col>
          <Col xs={8} sm={6} md={5} lg={3} xl={3}>
            <a href="https://www.example.com">
              <Button variant='outline-orange-border' size='lg' className='rounded-pill'>
                <Image src={applePodcastsButton} fluid className='px-1'></Image>
              </Button>
            </a>
          </Col>
          <Col xs={8} sm={6} md={5} lg={3} xl={3}>
            <a href="https://www.example.com">
              <Button variant='outline-orange-border' size='lg' className='rounded-pill'>
                <Image src={linkedInButton} fluid className='px-1'></Image>
              </Button>
            </a>
          </Col>
          <Col xs={8} sm={6} md={5} lg={3} xl={3}>
            <a href="https://www.example.com">
              <Button variant='outline-orange-border' size='lg' className='rounded-pill'>
                <Image src={instagramButton} fluid className='px-1'></Image>
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  )
}