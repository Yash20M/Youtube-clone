import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import "../CSS/Header.css";
import { NavLink } from 'react-router-dom'

const Header = () => {


  const [inputSearch, setInputSearch] = useState("");

  return (
    <>
      <header className="header">
        <div className="header_left">
          <MenuIcon />

          <NavLink to="/">
          <img className='header_logo' src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="" />
          </NavLink>
        </div>

        <div className="header_input">
          <input type="text"
            placeholder='Search'
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)} />

          <NavLink to={`/Search/${inputSearch}`}>
            <SearchIcon className="header_inputButton" />
          </NavLink>
        </div>

        <div className="header_icons">
          <VideoCallIcon className="header_icon" />
          <AppsIcon className="header_icon" />
          <NotificationsIcon className="header_icon" />
          <Avatar className="header_icon"
            alt="Yash Mahalle"
            src="https://avatars.githubusercontent.com/u/94429271?s=400&u=0d75cbed87fb7ec6134b1d039935f4d55a5bf802&v=4"
          />
        </div>
      </header>
    </>
  )
}

export default Header