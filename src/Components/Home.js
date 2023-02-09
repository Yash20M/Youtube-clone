import React from 'react';
import "../App.css";
import Sidebar from './Sidebar';
import Recommended from './Recommended';

const Home = () => {
  return (
    <div className="app_page">
    <Sidebar/>
    <Recommended />
  </div>
  )
};

export default Home;