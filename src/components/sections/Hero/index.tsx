import styles from './index.module.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import ctc_logo from '../../../assets/images/coffee-to-campfire-logo.jpg'

export default function Hero() {
  return (
    <>
      <div id='hero' className={`bg-orange ${styles['bg-equalizer']} py-2`}>
        <Container className='py-5'>
          <Row className='justify-content-center align-items-center row-gap-4'>
            <Col xs={10} sm={8} md={6} lg={4} xxl={3}>
              <Image src={ctc_logo} alt="todo" fluid></Image>
            </Col>
            <Col lg={6} xl={5}>
              <h1 className={`text-center ${styles['hero-title']}`}>COFFEE TO<br />CAMPFIRE</h1>
              <p className='fs-5 text-center text-white'>Come for the professional development,<br />stay for the campfire stories.</p>
              <div className='d-flex flex-column flex-sm-row gap-3 justify-content-center '>
                <a href="#subscribe">
                  <Button size='lg' className='w-100' variant='outline-white'>
                    Subscribe Now
                    &nbsp;<FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                  </Button>
                </a>
                <a href="https://www.example.com">
                  <Button size='lg' className='w-100' variant='outline-white'>
                    <FontAwesomeIcon icon={faCirclePlay}></FontAwesomeIcon>&nbsp;
                    Last Episode
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}