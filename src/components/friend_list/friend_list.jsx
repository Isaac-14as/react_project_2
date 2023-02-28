import React from "react";
import Firend from '../friend/friend'
import "./friend_list.css";

const Firends = () => {
    return (
        <div class="posts"> 
            <Firend username='Дмитрий'/>
            <Firend username='Владимир'/>
            <Firend username='Александр'/>
            <Firend username='Олег'/>
            <Firend username='Андрей'/>
            <Firend username='Алла'/>
        </div>
    )
}

export default Firends;