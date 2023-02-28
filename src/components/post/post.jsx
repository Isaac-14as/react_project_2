import React from "react";
import "./post.css";
import { Link } from 'react-router-dom';

const Post = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className="post_item">
            <Link to={path} className="author">{props.author}</Link>
            <div className="content">{props.content}</div>
        </div>
    )
}

export default Post;