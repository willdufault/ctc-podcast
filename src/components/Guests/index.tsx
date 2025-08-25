import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import arielMagilHeadshot from '../../assets/images/ariel-magil-headshot.webp'
import jacopoPiccirilloHeadshot from '../../assets/images/jacopo-piccirillo-headshot.webp'
import jeremyPhillipsHeadshot from '../../assets/images/jeremy-phillips-headshot.webp'
import joshRichardsonHeadshot from '../../assets/images/josh-richardson-headshot.webp'

export default function Guests() {
  interface GuestData {
    name: string
    position: string
    of: boolean
    company: string
    episodeNumber: number
    url: string
    imageSrc: string
  }
  const guests: GuestData[] = [
    {
      name: 'Josh Richardson',
      position: 'Investment Banking Analyst',
      of: false,
      company: 'Lazard',
      episodeNumber: 9,
      url: 'https://open.spotify.com/episode/4jN8RZHbUhPRbkH91nBVlY?si=736c152e829343a1',
      imageSrc: joshRichardsonHeadshot,
    },
    {
      name: 'Jacopo Piccirillo',
      position: 'Founder',
      of: true,
      company: 'Virtuous',
      episodeNumber: 8,
      url: 'https://open.spotify.com/episode/5qQggWPfqJzHVOAcD1Q0P3?si=755232150393415a',
      imageSrc: jacopoPiccirilloHeadshot,
    },
    {
      name: 'Ariel Magil',
      position: 'Manager',
      of: false,
      company: 'Raymond James',
      episodeNumber: 5,
      url: 'https://open.spotify.com/episode/099xguradRJVz4CaoX5n3b?si=f61f8f94cb9a42dc',
      imageSrc: arielMagilHeadshot,
    },
    {
      name: 'Jeremy Phillips',
      position: 'Manager',
      of: false,
      company: 'Simon-Kucher & Partners',
      episodeNumber: 4,
      url: 'https://open.spotify.com/episode/4V2fRBVVeiJn3mOHb9n2Um?si=cca66c391d864116',
      imageSrc: jeremyPhillipsHeadshot,
    },
  ]

  const ButtonGroup = ({ next, previous, goToSlide, carouselState }: any) => {
    const { currentSlide } = carouselState
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Button onClick={() => previous()} variant="arrow">
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </Button>
        <ul className="list-inline my-3 px-3">
          {guests.map((_, index) => (
            <li className="list-inline-item mb-1" key={index}>
              {/* Modulo prevents bug when jumping to slide 0. */}
              <Button
                onClick={() => goToSlide(index + guests.length)}
                variant="dot"
                className={
                  currentSlide % guests.length == index
                    ? 'bg-gray-dark'
                    : 'initial'
                }
              ></Button>
            </li>
          ))}
        </ul>
        <Button onClick={() => next()} variant="arrow">
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </Button>
      </div>
    )
  }
  return (
    <>
      <div id="guests" className="bg-body-tertiary">
        <Container className="pt-4 pb-5">
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
                  min: 768,
                },
                items: 2,
                partialVisibilityGutter: 40,
              },
              tablet: {
                breakpoint: {
                  max: 768,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
            }}
          >
            {guests.map((guest, index) => (
              <div className="p-1 h-100" key={index}>
                <Card className="h-100">
                  <Card.Body>
                    <Row className="align-items-center flex-column flex-lg-row row-gap-3">
                      <Col sm={9} md={10} lg={7} xl={6}>
                        <Image
                          src={guest.imageSrc}
                          alt="Coffee to Campfire logo"
                          className="w-100 border"
                          fluid
                        ></Image>
                      </Col>
                      <Col>
                        <h6 className="mb-2">{guest.name}</h6>
                        <p className="mb-1">
                          {guest.position} {guest.of ? 'of' : 'at'}{' '}
                          {guest.company}
                        </p>
                        <p className="text-black-50">
                          <small>Episode #{guest.episodeNumber}</small>
                        </p>
                        <a href={guest.url} target="_blank">
                          <Button variant="outline-orange-fill">
                            <FontAwesomeIcon
                              icon={faCirclePlay}
                            ></FontAwesomeIcon>
                            &nbsp; Listen now
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
