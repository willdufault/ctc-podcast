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
import episode7Image from '../../assets/images/episode-7.jpg'
import episode8Image from '../../assets/images/episode-8.jpg'
import episode9Image from '../../assets/images/episode-9.jpg'
import episode10Image from '../../assets/images/episode-10.jpg'
export default function Episodes() {
  interface EpisodeData {
    title: string
    description: string
    date: string
    hours: number
    minutes: number
    url: string
    imageSrc: string
  }
  const episodes: EpisodeData[] = [
    {
      title: '#10) Emmanuel\'s Journey to Morningstar',
      description:
        'Ryan and Emmanuel talk about Emmanuel\'s first job at Morningstar DBRS and career prospects as a Sovereign Ratings Analyst. They also discuss rising unemployment trends among MBA grads.',
      date: 'Apr 8 2025',
      hours: 0,
      minutes: 40,
      url: 'https://open.spotify.com/episode/2Pja9J5nGg5rz9NPLHJ2Q8?si=600400a1051c4c66',
      imageSrc: episode10Image,
    },
    {
      title: '#9) Josh Richardson',
      description:
        'Happy New Year from CTC! Join Ryan for insights from Lazard Analyst Josh Richardson on breaking into Wall Street and managing time in investment banking.',
      date: 'Jan 5 2025',
      hours: 0,
      minutes: 46,
      url: 'https://open.spotify.com/episode/4jN8RZHbUhPRbkH91nBVlY?si=736c152e829343a1',
      imageSrc: episode9Image,
    },
    {
      title: '#8) Jacopo Piccirillo',
      description:
        'Ryan and Emmanuel chat with aspiring venture capitalist Jacopo Piccirillo about launching a European soft drink during the pandemic, covering R&D, funding, and product development insights.',
      date: 'Nov 12 2024',
      hours: 0,
      minutes: 44,
      url: 'https://open.spotify.com/episode/5qQggWPfqJzHVOAcD1Q0P3?si=1e757d40b5844f2b',
      imageSrc: episode8Image,
    },
    {
      title: '#7) New Beginnings',
      description:
        "Emmanuel and Ryan discuss Ryan's start at UChicago Booth for his Master's, the career value of a CFA designation, and add a new segment on current business news.",
      date: 'Oct 7 2024',
      hours: 0,
      minutes: 49,
      url: 'https://open.spotify.com/episode/4nseqbWSO7HbuEpnOybfnM?si=d5d320b0560243dd',
      imageSrc: episode7Image,
    }
  ]

  function formatTime(hours: number, minutes: number): string {
    const hours_formatted = hours > 0 ? `${hours} hr ` : ''
    const minutes_formatted = `${minutes} min`
    return hours_formatted + minutes_formatted
  }

  const ButtonGroup = ({ next, previous, goToSlide, carouselState }: any) => {
    const { currentSlide } = carouselState
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Button onClick={() => previous()} variant="arrow">
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </Button>
        <ul className="list-inline my-3 px-3">
          {episodes.map((_, index) => (
            <li className="list-inline-item mb-1" key={index}>
              {/* Modulo prevents bug when jumping to slide 0. */}
              <Button
                onClick={() => goToSlide(index + episodes.length)}
                variant="dot"
                className={
                  currentSlide % episodes.length == index
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
      <Container id="episodes" className="pt-4 pb-5">
        <h3>Latest Episodes</h3>
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
          {episodes.map((episode, index) => (
            <div className="p-1 h-100" key={index}>
              <Card className="h-100">
                <Card.Body>
                  <Row className="align-items-center flex-column flex-xl-row row-gap-3">
                    <Col sm={9} md={10} lg={7} xl={5}>
                      <Image
                        src={episode.imageSrc}
                        alt="Coffee to Campfire logo"
                        className="w-100 border"
                        fluid
                      ></Image>
                    </Col>
                    <Col>
                      <h6 className="mb-2">{episode.title}</h6>
                      <p className="mb-1">{episode.description}</p>
                      <p className="text-black-50">
                        <small>
                          {episode.date} –{' '}
                          {formatTime(episode.hours, episode.minutes)}
                        </small>
                      </p>
                      <a href={episode.url} target="_blank">
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
        {/* <div className='d-flex justify-content-center'>
          <Button variant='outline-orange-border'>View all episodes &rarr;</Button>
        </div> */}
      </Container>
    </>
  )
}
