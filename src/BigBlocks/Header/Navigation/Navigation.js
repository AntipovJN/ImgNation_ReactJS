import React from 'react'
import s from './Navigation.module.css'
import {faBell , faComment,faUser,faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const Navigation = () => {
    return <div className={s.navigation_Container}>
        <div className={s.navigation_element}>
            <a href="/main" className={s.header_navigation_link}>Главная</a>
        </div>
        <div className={s.navigation_element}>
            <a href="" className={s.header_navigation_link}>Подписки</a></div>
        <div className={s.navigation_element}>
            <a href="/profile" className={s.header_navigation_link}><FontAwesomeIcon
            icon={faUser} size={"lg"}/></a></div>
        {/*<div className={s.navigation_element}><a href="" className={s.header_navigation_link}><FontAwesomeIcon*/}
            {/*icon={faComment} size={"lg"}/></a></div>*/}
        <div className={s.navigation_element} ><a href="" className={s.header_navigation_link}><FontAwesomeIcon
            icon={faBell} size={"lg"}/></a></div>
        <div className={s.navigation_element}><a href="" className={s.header_navigation_link}><FontAwesomeIcon
            icon={faBars} size={"lg"}/></a></div>
    </div>


}

export default Navigation