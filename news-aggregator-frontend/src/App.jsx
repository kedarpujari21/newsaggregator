import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import NewsPage from './components/News/NewsPage'
import FavouritesPage from './components/Favourites/FavouritesPage'
import LiveUpdates from './components/LiveUpdates/LiveUpdates'
import Login from './components/Login/Login'


const App = () => {
  return (
  <Router>
    <div className='app'>
     <Navbar/>
     <Routes>
       {/*Routes for Home Page and News Page */}
       <Route path="/" element={<Home/>}/> {/*Route for Home Page */}
       <Route path="/news" element={<NewsPage/>}/> {/*Route for News Page */}
       <Route path="/favorites" element={<FavouritesPage />} />
       <Route path="/liveupdates" element={<LiveUpdates />} />
       <Route path="/login" element={<Login />} />
     </Routes>
     <Footer/>
    </div>
  </Router>  
  )
}

export default App

