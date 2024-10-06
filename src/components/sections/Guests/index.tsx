import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ryanHeadshot from '../../../assets/images/ryan-hu-headshot.jpg'

export default function Guests() {
  interface GuestData {
    name: string
    position: string
    company: string
    episodeNumber: number
    url: string
  }
  const guests: GuestData[] = [
    {
      name: 'Jane Doe',
      position: 'Chief Executive Officer',
      company: 'Nvidia',
      episodeNumber: 1,
      url: 'https://example.com',
    },
    {
      name: 'Jane Doe',
      position: 'Chief Executive Officer',
      company: 'Nvidia',
      episodeNumber: 1,
      url: 'https://example.com',
    },
    {
      name: 'Jane Doe',
      position: 'Chief Executive Officer',
      company: 'Nvidia',
      episodeNumber: 1,
      url: 'https://example.com',
    },
    {
      name: 'Jane Doe',
      position: 'Chief Executive Officer',
      company: 'Nvidia',
      episodeNumber: 1,
      url: 'https://example.com',
    },
  ]

  const ButtonGroup = ({ next, previous, goToSlide, carouselState }: any) => {
    const { currentSlide } = carouselState;
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Button onClick={() => previous()} variant='arrow'>
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </Button>
        <ul className='list-inline my-3 px-3'>
          {guests.map((_, index) => (
            <li className='list-inline-item mb-1'>
              {/* Modulo prevents bug when jumping to slide 0. */}
              <Button
                onClick={() => goToSlide(index + guests.length)}
                variant='dot'
                className={currentSlide % guests.length == index ? "bg-gray-dark" : "initial"}
              >
              </Button>
            </li>
          ))}
        </ul>
        <Button onClick={() => next()} variant='arrow'>
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </Button>
      </div>
    );
  };
  return (
    <>
      <div id='guests' className='bg-body-tertiary'>
        <Container className='pt-4 pb-5'>
          <h3>Featured Guests</h3>
          <Carousel
            draggable={false}
            infinite
            pauseOnHover
            arrows={false}
            showDots={false}
            customButtonGroup={<ButtonGroup />}
            renderButtonGroupOutside={true}
            shouldResetAutoplay
            slidesToSlide={1}
            swipeable
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 768
                },
                items: 2,
                partialVisibilityGutter: 40
              },
              tablet: {
                breakpoint: {
                  max: 768,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
            }}
          >
            {guests.map((guest) => (
              <div className='p-1 h-100'>
                <Card className='h-100'>
                  <Card.Body>
                    <Row className='align-items-center flex-column flex-lg-row row-gap-3'>
                      <Col sm={9} md={10} lg={7} xl={6}>
                        <Image src={ryanHeadshot} alt="Coffee to Campfire logo" className='w-100' fluid></Image>
                      </Col>
                      <Col>
                        <h6 className='mb-2'>{guest.name}</h6>
                        <p className='mb-1'>{guest.position} at {guest.company}</p>
                        <p className="text-black-50"><small>Episode #{guest.episodeNumber}</small></p>
                        <a href={guest.url}>
                          <Button variant='outline-orange-fill'>
                            <FontAwesomeIcon icon={faCirclePlay}></FontAwesomeIcon>&nbsp;
                            Listen now
                          </Button>
                        </a>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Carousel>
          {/* <div className='mt-3 d-flex justify-content-center'>
            <Button variant='outline-orange-border'>View past guests &rarr;</Button>
          </div> */}
        </Container>
      </div>
    </>
  )
}