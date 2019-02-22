import React from 'react'
import {Redirect} from 'react-router-dom'
const RedirectorByUrl=(url)=>{
    return(
        <Redirect to={url}/>
    )
}
export default RedirectorByUrl