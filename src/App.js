import React from 'react';

import {BrowserRouter as Router, Routes, Route, /*Link*/} from 'react-router-dom';

import Header from './components/Header'

import Home from './pages/Home'
import Popular from './pages/Popular'
import NowPlaying from './pages/NowPlaying'
import Searched from './pages/Searched'
import ErrorPage from './pages/ErrorPage'
import TopMovies from './pages/TopMovies'
import Movie from './pages/Movie'
import Footer from './components/Footer'


import './styling/header.css'
import './styling/home.css'
import './styling/moviepage.css'
import './styling/footer.css'
import './styling/movie.css'
import './App.css';

function App() {
 







  return (
    <>
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Searched" element={<Searched />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/nowplaying" element={<NowPlaying />} />
      <Route path="/TopMovies" element={<TopMovies />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
    <Footer />
  </Router>
  </>
  );
}

export default App;


// <input type="text" onKeyDown={handleSearch}/>

// function handleSearch(e){ if(e.key === "Enter"){}}