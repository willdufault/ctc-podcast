import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function Guests() {
  return (
    <>
      <div id='guests' className='bg-body-tertiary'>
        <Container className='pt-4 pb-5'>
          <h3>Featured Guests</h3>
          <Carousel
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable={false}
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
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
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            <div className='p-1'>
              <Card>
                <Card.Body>test</Card.Body>
              </Card>
            </div>
            <div className='p-1'>
              <Card>
                <Card.Body>test</Card.Body>
              </Card>
            </div>
            <div className='p-1'>
              <Card>
                <Card.Body>test</Card.Body>
              </Card>
            </div>
            <div className='p-1'>
              <Card>
                <Card.Body>test</Card.Body>
              </Card>
            </div>
          </Carousel>
          <div className='mt-3 d-flex justify-content-center'>
            <Button variant='outline-orange-border'>View past guests &rarr;</Button>
          </div>
        </Container>
      </div>
    </>
  )
}