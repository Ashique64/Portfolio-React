import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import Portfolio from './Components/Portfolio/Portfolio'
import Services from './Components/Services/Services'
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
