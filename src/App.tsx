import About from './components/About'
import Contact from './components/Contact'
import Episodes from './components/Episodes'
import Footer from './components/Footer'
import Guests from './components/Guests'
import Hero from './components/Hero'
import NavigationBar from './components/NavigationBar'
import Subscribe from './components/Subscribe'
import './styles.scss'

function App() {
  return (
    <>
      <article>
        <NavigationBar></NavigationBar>
        <Hero></Hero>
        <Episodes></Episodes>
        <Guests></Guests>
        <About></About>
        <Contact></Contact>
        <Subscribe></Subscribe>
        <Footer></Footer>
      </article>
    </>
  )
}

export default App
