import './App.css'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import Portfolio from './Components/Portfolio/Portfolio'
import Services from './Components/Services/Services'

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Services/>
      <Portfolio/>
    </>
  )
}

export default App
