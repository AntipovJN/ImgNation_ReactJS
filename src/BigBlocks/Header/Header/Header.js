import React from 'react'
import Logo from '../Logo/Logo'
import s from './Header.module.css'
import SearchForm from './../Search/SearchForm'
import Navigation from './../Navigation/Navigation'


const Header =()=>{
    return(
        <div className={s.header}>
            <Logo />
            <SearchForm/>
            <Navigation />
        </div>
    )
}
export default Header