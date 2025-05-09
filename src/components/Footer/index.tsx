import Container from 'react-bootstrap/Container'

export default function Footer() {
  const year: number = new Date().getFullYear()

  return (
    <>
      <div id="footer" className="bg-dark text-white-50">
        <Container className="py-4">
          <div className="d-flex flex-column flex-md-row align-items-center row-gap-1 justify-content-md-between">
            <p className="mb-0">Copyright &copy; {year} Coffee to Campfire</p>
            <p className="mb-0">
              Created by{' '}
              <a
                href="https://linkedin.com/in/willdufault"
                target="_blank"
                className="text-white-50"
              >
                Will Dufault
              </a>
            </p>
          </div>
        </Container>
      </div>
    </>
  )
}
