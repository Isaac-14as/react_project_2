import React from "react";
import Message from '../message/message'
import "./dialog.css";

let dialogsData = [ 
    [
        {username: 'Вы', text: 'Привет! Как дела?'},
        {username: 'Дмитрий', text: 'Здарова. Все хорошо. У тебя как?'},
        {username: 'Вы', text: 'Да вроде не жалуюсь'},    
    ],
    [
        {username: 'Вы', text: 'Как продвигается проект'},
        {username: 'Владимир', text: 'Пока только макет готовится. К пн сделаем.'},
        {username: 'Вы', text: 'Ок. Жду.'},    
    ],
    [
        {username: 'Вы', text: 'Привет. Извини, сегодня встречу предется отменить, я приболел.'},
        {username: 'Александр', text: 'Привет. Ок, Выздоравливай!'},
        {username: 'Вы', text: 'Хорошо, спасибо'},    
    ],
]

const Dialog = () => {
    let dialogsElements = dialogsData[window.location.pathname.split('/')[window.location.pathname.split('/').length - 1] - 1]
    .map( dialog  => <Message username={dialog.username} text={dialog.text} /> );
    return (
        <div className="posts"> 
            { dialogsElements }

        </div>
    )
}

export default Dialog;