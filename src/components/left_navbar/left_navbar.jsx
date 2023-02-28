import React from "react";
import "./left_navbar.css";
import { Link } from 'react-router-dom';

const LeftNavbar = () => {
    return (
        <div className="left_navbar">
            
            <a className="left_navbar_item">My profile</a>
            <a className="left_navbar_item">News</a>
            <Link className="left_navbar_item" to="/posts">Messenger</Link>
            <a className="left_navbar_item">Calls</a>
            <Link className="left_navbar_item" to="/friends">Friends</Link>
            <a className="left_navbar_item">Communities</a>
            <a className="left_navbar_item">Photos</a>
            <a className="left_navbar_item">Music</a>
            <a className="left_navbar_item">Videos</a>
            <a className="left_navbar_item">Clips</a>
            <a className="left_navbar_item">Games</a>
            <a className="left_navbar_item">Stikers</a>
            <a className="left_navbar_item">Market</a>
        </div>
    )
}

export default LeftNavbar;