import React from "react";
import "./message.css";

const Message = (props) => {
    return (
        <div className="message"> 
            <div className="username">{props.username}</div>
            <div className="text">{props.text}</div>
        </div>
    )
}

export default Message;