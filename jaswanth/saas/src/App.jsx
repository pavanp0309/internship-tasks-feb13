import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import LogoText from './components/LogoText'
import Quote from './components/Quote'
import Details from './components/Details'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      <LogoText/>
      <Quote/>
      <Details/>
      <Footer/>
    </div>
  )
}

export default App