import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-multi-carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import episode4Image from '../../../assets/images/episode-4.jpg'
import episode5Image from '../../../assets/images/episode-5.jpg'
import episode6Image from '../../../assets/images/episode-6.jpg'
import episode7Image from '../../../assets/images/episode-7.jpg'
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
    imageSrc: string
  }
  const episodes: EpisodeData[] = [
    {
      title: '#7 New Beginnings',
      description: 'Emmanuel and Ryan discuss Ryan\'s start at UChicago Booth for his Master\'s, the career value of a CFA designation, and add a new segment on current business news.',
      date: 'Oct 7 2024',
      hours: 0,
      minutes: 49,
      url: 'https://open.spotify.com/episode/4nseqbWSO7HbuEpnOybfnM?si=d5d320b0560243dd',
      imageSrc: episode7Image
    },
    {
      title: '#6 CTC x KTTP',
      date: 'Aug 10 2024',
      description: 'Ryan and Emmanuel join the KTTP hosts to discuss East vs. West Coast lifestyles and compare UofT\'s Economics program with UBC\'s Sauder School of Business.',
      hours: 0,
      minutes: 55,
      url: 'https://open.spotify.com/episode/1XTBLTx6phNM2clKYVPK67?si=6da0a771fa18419c',
      imageSrc: episode6Image
    },
    {
      title: '#5 Ariel Magil',
      description: 'Ryan and Emmanuel interview Raymond James Toronto Manager Ariel Magil on building a career in Wealth Management and job-hunting tips for students.',
      date: 'July 18 2024',
      hours: 0,
      minutes: 40,
      url: 'https://open.spotify.com/episode/099xguradRJVz4CaoX5n3b?si=c7cbb4bc3b26445a',
      imageSrc: episode5Image
    },
    {
      title: '#4 Jeremy Phillips',
      description: 'Ryan and Emmanuel talk with Simon-Kucher Boston Manager Jeremy Phillips about revenue-focused strategy consulting and tips for choosing an MBA program.',
      date: 'Jun 23 2024',
      hours: 0,
      minutes: 36,
      url: 'https://open.spotify.com/episode/4V2fRBVVeiJn3mOHb9n2Um?si=ec7158e193b2458e',
      imageSrc: episode4Image
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
                      <Image src={episode.imageSrc} alt="Coffee to Campfire logo" className='w-100 border' fluid></Image>
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