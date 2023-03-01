import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../logo.png"
import {ImSearch} from 'react-icons/im'

const Header = () => {
  return (
    <nav className="header">
        <img src={logo} alt="logo" />

        <div>
            <Link to="/tvshows">TV Shows</Link>
            <Link to="/tvshows">Movies</Link>
            <Link to="/tvshows">Recently Added</Link>
            <Link to="/tvshows">My List</Link>
        </div>

        <ImSearch />

    </nav>
  )
}

export default Header