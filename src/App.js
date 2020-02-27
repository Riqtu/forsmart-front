import React from 'react'

import './App.css'
import HelloPage from './components/HelloPage/HelloPage'
import About from './components/About/About'
import smoothscroll from 'smoothscroll-polyfill'
import Teacher from './components/Teacher/Teacher'
import Events from './components/Events/Events'
import Footer from './components/Footer/Footer'
import EducationCourse from './components/EducationCourse/EducationCourse'
import Videos from './components/Videos/Videos.jsx'
import Menu from './components/Menu/Menu'
smoothscroll.polyfill()
function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <HelloPage></HelloPage>
      <About></About>
      <Teacher></Teacher>
      <EducationCourse></EducationCourse>
      <Videos></Videos>
      <Events></Events>
      <Footer></Footer>
    </div>
  )
}

export default App
