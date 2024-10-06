import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-multi-carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ctcLogo from '../../../assets/images/coffee-to-campfire-logo.jpg'
import 'react-multi-carousel/lib/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
export default function Episodes() {
  interface EpisodeData {
    title: string
    description: string
    date: string
    hours: number
    minutes: number
    url: string
  }
  const episodes: EpisodeData[] = [
    {
      title: '#4 Jane Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta voluptatibus eos earum aut reiciendis!',
      date: 'Jan 1 2024',
      hours: 1,
      minutes: 35,
      url: 'https://www.example.com'
    },
    {
      title: '#3 Jane Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta voluptatibus eos earum aut reiciendis!',
      date: 'Jan 1 2024',
      hours: 0,
      minutes: 51,
      url: 'https://www.example.com'
    },
    {
      title: '#2 Jane Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta voluptatibus eos earum aut reiciendis!',
      date: 'Jan 1 2024',
      hours: 1,
      minutes: 35,
      url: 'https://www.example.com'
    },
    {
      title: '#1 Jane Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta voluptatibus eos earum aut reiciendis!',
      date: 'Jan 1 2024',
      hours: 1,
      minutes: 35,
      url: 'https://www.example.com'
    }
  ]

  function formatTime(hours: number, minutes: number): string {
    const hours_formatted = hours > 0 ? `${hours} hr ` : ''
    const minutes_formatted = `${minutes} min`
    return hours_formatted + minutes_formatted
  }

  const ButtonGroup = ({ next, previous, goToSlide, carouselState }: any) => {
    const { currentSlide } = carouselState;
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Button onClick={() => previous()} variant='arrow'>
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </Button>
        <ul className='list-inline my-3 px-3'>
          {episodes.map((_, index) => (
            <li className='list-inline-item mb-1'>
              {/* Modulo prevents bug when jumping to slide 0. */}
              <Button
                onClick={() => goToSlide(index + episodes.length)}
                variant='dot'
                className={currentSlide % episodes.length == index ? "bg-gray-dark" : "initial"}
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
      <Container id='episodes' className='pt-4 pb-5'>
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
          {episodes.map((episode) => (
            <div className='p-1 h-100'>
              <Card className='h-100'>
                <Card.Body>
                  <Row className='align-items-center flex-column flex-xl-row row-gap-3'>
                    <Col sm={9} md={10} lg={7} xl={5}>
                      <Image src={ctcLogo} alt="Coffee to Campfire logo" className='w-100' fluid></Image>
                    </Col>
                    <Col>
                      <h6 className='mb-2'>{episode.title}</h6>
                      <p className='mb-1'>{episode.description}</p>
                      <p className="text-black-50"><small>{episode.date} – {formatTime(episode.hours, episode.minutes)}</small></p>
                      <a href={episode.url}>
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
        {/* <div className='d-flex justify-content-center'>
          <Button variant='outline-orange-border'>View all episodes &rarr;</Button>
        </div> */}
      </Container>
    </>
  )
}