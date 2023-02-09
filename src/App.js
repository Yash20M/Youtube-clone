import React from 'react';
import Header from "./Components/Header.js";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home.js';
import SearchPage from './Components/SearchPage.js';


const App = () => {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Search/:searchTerm' element={<SearchPage />} />
          </Routes>

        </BrowserRouter>
      </div>


    </>
  )
}

export default App;