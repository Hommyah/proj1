import * as React from "react";
import {Link} from "react-router-dom";
import "./header.css"

const Header = () => {

    

    return (
        <div className="header">
            <Link className='header__item' to={"/calculator"}>Калькулятор</Link>
            <Link className='header__item' to={"/list"}>Список</Link>
            <Link className='header__item' to={"/notice"}>Уведомления</Link>
            <Link className='header__item' to={"/square"}>Квадраты</Link>
            <Link className='header__item' to={"/slider"}>Слайдер</Link>
        </div>
    )
}

export default Header;