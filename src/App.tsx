import './styles.scss'
import NavigationBar from './components/sections/NavigationBar'
import Hero from './components/sections/Hero'
import Episodes from './components/sections/Episodes'
import Guests from './components/sections/Guests'
import About from './components/sections/About'
import Footer from './components/sections/Footer'
import Contact from './components/sections/Contact'
import Subscribe from './components/sections/Subscribe'

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
