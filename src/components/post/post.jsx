import React from "react";
import "./post.css";

const Post = (props) => {
    return (
        <div className="post_item">
            <div className="author">{props.author}</div>
            <div className="content">{props.content}</div>
        </div>
    )
}

export default Post;