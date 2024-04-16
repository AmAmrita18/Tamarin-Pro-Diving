import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './Layout'
import Home from './components/Home/Home';
import About from './components/About/About';
import DivingCourses from './components/DivingCourses/DivingCourses';
import DivingSites from './components/DivingCourses/DivingSites';
import Specials from './components/Specials/Specials';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';


const Root = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<DivingCourses/>} />
        {/* <Route path='/sites' element={<DivingSites />} /> */}
        <Route path='/specials' element={<Specials />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Root />
)