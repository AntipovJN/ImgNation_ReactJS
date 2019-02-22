import React from 'react'
import  s from './Search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm=()=>{
    return (
        <div className={s.search_form_Container}>

        <form className={s.search_form}>
            <input type="text" placeholder="Найти" />
                <button type="submit" className='button1'><FontAwesomeIcon icon={faSearch} size ={'lg'}color={'#4b4a44' }/></button>
            </form>
    </div>)
}
export default SearchForm//