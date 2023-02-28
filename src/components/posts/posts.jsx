import React from "react";
import Post from '../post/post'
import "./posts.css";

const Posts = () => {
    return (
        <div className="posts">
            <Post id="1" author='Дмитрий' content="Привет. Как жизнь?"/>
            <Post id="2" author='Владимир' content="Почему бы и нет"/>
            <Post id="3" author='Александр' content="Давай завтра обговорим этот вопрос"/>
        </div>
    )
}

export default Posts;