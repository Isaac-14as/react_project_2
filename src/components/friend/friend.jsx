import React from "react";
import "./friend.css";

const Friend = (props) => {
    return (
        <div className="friend_item">
            <div className="username">{props.username}</div>
        </div>
    )
}

export default Friend;