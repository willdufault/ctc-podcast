import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

export default function NavigationBar() {
  return (
    <Navbar id='navbar' collapseOnSelect expand="md">
      <Container className='justify-content-end'>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-md-center'>
          <Nav className='align-items-md-center column-gap-1'>
            <Nav.Link href="#episodes">Episodes</Nav.Link>
            <Nav.Link href="#guests">Guests</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#subscribe" className='p-0 my-2 mx-md-2'>
              <Button variant='orange'>Subscribe</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )}