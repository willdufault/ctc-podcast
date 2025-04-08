import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import applePodcastsButton from '../../assets/images/apple-podcasts-button.png'
import instagramButton from '../../assets/images/instagram-button.png'
import linkedInButton from '../../assets/images/linkedin-button.png'
import spotifyButton from '../../assets/images/spotify-button.png'

export default function Subscribe() {
  return (
    <>
      <Container id="subscribe" className="pt-4 pb-5">
        <h3>Subscribe Now</h3>
        <Row className="row-gap-3 justify-content-between" xxl={5}>
          <Col xs={8} sm={6} md={5} lg={3} xl={3}>
            <a
              href="https://open.spotify.com/show/41HtUjXhvdWOqBhywrJ1ge"
              target="_blank"
            >
              <Button
                variant="outline-orange-border"
                size="lg"
                className="rounded-pill"
              >
                <Image
                  src={spotifyButton}
                  alt="Listen on Spotify"
                  fluid
                  className="px-1"
                ></Image>
              </Button>
            </a>
          </Col>
          <Col xs={8} sm={6} md={5} lg={3} xl={3}>
            <a
              href="https://podcasts.apple.com/us/podcast/coffee-to-campfire/id1738944512"
              target="_blank"
            >
              <Button
                variant="outline-orange-border"
                size="lg"
                className="rounded-pill"
              >
                <Image
                  src={applePodcastsButton}
                  alt="Listen on Apple Podcasts"
                  fluid
                  className="px-1"
                ></Image>
              </Button>
            </a>
          </Col>
          <Col xs={8} sm={6} md={5} lg={3} xl={3}>
            <a
              href="https://www.linkedin.com/company/coffeetocampfire/?viewAsMember=true"
              target="_blank"
            >
              <Button
                variant="outline-orange-border"
                size="lg"
                className="rounded-pill"
              >
                <Image
                  src={linkedInButton}
                  alt="Follow on LinkedIn"
                  fluid
                  className="px-1"
                ></Image>
              </Button>
            </a>
          </Col>
          <Col xs={8} sm={6} md={5} lg={3} xl={3}>
            <a
              href="https://www.instagram.com/coffeetocampfire/"
              target="_blank"
            >
              <Button
                variant="outline-orange-border"
                size="lg"
                className="rounded-pill"
              >
                <Image
                  src={instagramButton}
                  alt="Follow on Instagram"
                  fluid
                  className="px-1"
                ></Image>
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  )
}
