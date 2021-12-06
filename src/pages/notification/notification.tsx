import * as React from "react";
import "./notification.css"
import Notify from "./components/notify";

const Notification = () => {
    const [style, setStyle] = React.useState({opacity: 0})
    const [timer, setTimer] = React.useState(0)


    const Show = () => {
        setStyle({opacity: 1})
        if (timer === 0) {
        setTimer(window.setTimeout(Hide, 3000))} else {
            setTimer(0)
            return
        }

    }
    const Hide = () => {
        setStyle({opacity: 0})
    }


    return (
        <div>
            <button className='btn' onClick={Show}>Вывести уведомление</button>
            <Notify styles={style} setActive={()=>setStyle}/>
        </div>
    )
}

export default Notification;