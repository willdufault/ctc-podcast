import Social from '../../Social'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { faLinkedin, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faPodcast } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import ctcLogo from '../../../assets/images/coffee-to-campfire-logo.jpg'
import ryanHeadshot from '../../../assets/images/ryan-hu-headshot.jpg'
import emmanuelHeadshot from '../../../assets/images/emmanuel-atallah-headshot.jpg'

export default function About() {
  return (
    <>
      <Container id='about' className='pt-4 pb-5'>
        <h3>About Us</h3>
        <Stack gap={3}>
          <Card>
            <Card.Body>
              <Row className='align-items-center flex-column flex-md-row row-gap-3'>
                <Col sm={9} md={5} lg={4} xl={3}>
                  <Image src={ctcLogo} alt="Coffee to Campfire logo" className='w-100 border' fluid></Image>
                </Col>
                <Col>
                  <h6 className='mb-3'>Coffee to Campfire</h6>
                  <p>
                    Coffee to Campfire is a professional development podcast exploring the journeys of individuals who have climbed to top leadership positions in business, offering insightful conversations, practical advice, and inspiration to aspiring professionals and entrepreneurs. Our mission is to empower listeners with the knowledge and motivation to navigate their own career paths.
                  </p>
                  <div className='d-flex column-gap-3'>
                    <Social url='https://open.spotify.com/show/41HtUjXhvdWOqBhywrJ1ge' Icon={faSpotify}></Social>
                    <Social url='https://podcasts.apple.com/us/podcast/coffee-to-campfire/id1738944512' Icon={faPodcast}></Social>
                    <Social url='https://www.linkedin.com/company/coffeetocampfire/?viewAsMember=true' Icon={faLinkedin}></Social>
                    <Social url='https://www.instagram.com/coffeetocampfire/' Icon={faInstagram}></Social>
                    <Social url='mailto:coffeetocampfire@gmail.com' Icon={faEnvelope}></Social>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Row className='align-items-center flex-column flex-md-row row-gap-3'>
                <Col sm={9} md={5} lg={4} xl={3}>
                  <Image src={ryanHeadshot} alt="Ryan Hu headshot" className='w-100 border' fluid></Image>
                </Col>
                <Col>
                  <h6 className='mb-0'>Ryan Hu</h6>
                  <p>Co-Host of Coffee to Campfire</p>
                  <p>
                    Ryan is a Master in Management student at the University of Chicago Booth School of Business and a graduate of the University of Toronto with a degree in Economics. He is an incoming Investment Analyst at Cambridge Associates in Boston and is highly interested in buy-side opportunities within private asset classes, including growth equity, venture capital, and mezzanine financing. He is also currently pursuing CFA Level 1. In his free time, he enjoys playing paddle sports, running marathons, and traveling.
                  </p>
                  <div className='d-flex column-gap-3'>
                    <Social url='https://www.linkedin.com/in/ryanhhu/' Icon={faLinkedin}></Social>
                    <Social url='https://www.instagram.com/rhu.2002/?hl=en' Icon={faInstagram}></Social>
                    <Social url='mailto:rhu.2k02@gmail.com' Icon={faEnvelope}></Social>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Row className='align-items-center flex-column flex-md-row row-gap-3'>
                <Col sm={9} md={5} lg={4} xl={3}>
                  <Image src={emmanuelHeadshot} alt="Emmanuel Atallah headshot" className='w-100 border' fluid></Image>
                </Col>
                <Col>
                  <h6 className='mb-0'>Emmanuel Atallah</h6>
                  <p>Co-Host of Coffee to Campfire</p>
                  <p>
                    Emmanuel is a Global Sovereign Credit Analyst at Morningstar DBRS in Toronto. He is entering the credit ratings industry after obtaining his bachelors in Economics and Political Science from the University of Toronto. He is also currently pursuing CFA Level 1. In his free time, he enjoys playing and watching basketball and football, reading comic books, and running.
                  </p>
                  <div className='d-flex column-gap-3'>
                    <Social url='https://www.linkedin.com/in/emmanuel-joseph-atallah-5523a1132/' Icon={faLinkedin}></Social>
                    <Social url='https://www.instagram.com/emmanuelatallah/?hl=en' Icon={faInstagram}></Social>
                    <Social url='mailto:emmanuel.atallah@gmail.com' Icon={faEnvelope}></Social>
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