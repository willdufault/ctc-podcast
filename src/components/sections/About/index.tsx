import Social from '../../Social'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faPodcast } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import ctcLogo from '../../../assets/images/coffee-to-campfire-logo.jpg'
import ryanHeadshot from '../../../assets/images/ryan-hu-headshot.jpg'
import emmanuelHeadshot from '../../../assets/images/emmanuel-atallah-headshot.jpg'

export default function About() {
  return (
    <>
      <Container className='pt-4 pb-5'>
        <h3>About Us</h3>
        <Stack gap={3}>
          <Card>
            <Card.Body>
              <Row className='align-items-center flex-column flex-md-row row-gap-3'>
                <Col sm={9} md={5} lg={4} xl={3}>
                  <Image src={ctcLogo} alt="Coffee to Campfire logo" className='w-100' fluid></Image>
                </Col>
                <Col>
                  <h6 className='mb-3'>Coffee to Campfire</h6>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio necessitatibus repellendus, molestiae vero reprehenderit totam exercitationem consectetur unde provident voluptas non aperiam! Maxime hic, aut dignissimos modi inventore animi, aperiam voluptatum maiores architecto deserunt distinctio facere facilis aliquam temporibus quod porro? Officiis ducimus unde atque quam quae mollitia praesentium laborum.
                  </p>
                  <div className='d-flex column-gap-3'>
                    {/* TODO: make sure this looks good on mobile */}

                    <Social url='https://www.example.com' Icon={faSpotify}></Social>
                    <Social url='https://www.example.com' Icon={faPodcast}></Social>
                    <Social url='https://www.example.com' Icon={faLinkedin}></Social>
                    <Social url='https://www.example.com' Icon={faInstagram}></Social>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Row className='align-items-center flex-column flex-md-row row-gap-3'>
                <Col sm={9} md={5} lg={4} xl={3}>
                  <Image src={ryanHeadshot} alt="Ryan Hu headshot" className='w-100' fluid></Image>
                </Col>
                <Col>
                  <h6 className='mb-0'>Ryan Hu</h6>
                  <p>Co-host of Coffee to Campfire</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur incidunt, corrupti amet eveniet, dignissimos debitis nesciunt repellendus, assumenda corporis quas alias repudiandae dolores quam deleniti perferendis consectetur dolor quos modi repellat officia! Eos, quasi excepturi! Modi fugiat iste placeat quaerat.
                  </p>
                  <div className='d-flex column-gap-3'>
                    <Social url='https://www.example.com' Icon={faLinkedin}></Social>
                    <Social url='https://www.example.com' Icon={faInstagram}></Social>
                    <Social url='https://www.example.com' Icon={faEnvelope}></Social>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Row className='align-items-center flex-column flex-md-row row-gap-3'>
                <Col sm={9} md={5} lg={4} xl={3}>
                  <Image src={emmanuelHeadshot} alt="Emmanuel Atallah headshot" className='w-100' fluid></Image>
                </Col>
                <Col>
                  <h6 className='mb-0'>Emmanuel Atallah</h6>
                  <p>Co-host of Coffee to Campfire</p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis placeat molestias ipsum non perferendis cum nulla vero voluptate, reiciendis ut qui, quidem iure nihil. Corporis, provident? Nihil ullam sint dicta eligendi sapiente optio sit ut nam, beatae a eos minus!
                  </p>
                  <div className='d-flex column-gap-3'>
                    <Social url='https://www.example.com' Icon={faLinkedin}></Social>
                    <Social url='https://www.example.com' Icon={faInstagram}></Social>
                    <Social url='https://www.example.com' Icon={faEnvelope}></Social>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Stack>
      </Container>
    </>
  )
}