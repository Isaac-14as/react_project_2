import React from "react";
import Post from '../post/post'
import "./posts.css";

const Posts = () => {
    return (
        <div class="posts"> 
            <Post author='Дмитрий' content="Привет. Как жизнь?"/>
            <Post author='Владимир' content="Почему бы и нет"/>
            <Post author='Александр' content="Давай завтра обговорим этот вопрос"/>
            <Post author='Олег' content="Не думаю, что это хорошая идея"/>
            <Post author='Андрей' content="Бро, го в хс"/>
            <Post author='Алла' content="Давное не виделись, может пересечемся?"/>
        </div>
    )
}

export default Posts;