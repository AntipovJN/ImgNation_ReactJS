import React,{Component} from 'react'
import f from './MP.module.css'
import PostsViews from './PostsViews'
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "../Profile/Profile";
import PostById from "./Post/PostById";

import Switch from "react-router/es/Switch";
import AddImagePage from "../Profile/AddImagePage/AddImagePage";
class MainPageContent extends Component{
    render() {
    return(

        <BrowserRouter>
            <div className={f.box}>

                <Route path='/main'  component={PostsViews}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/item/:id' component={PostById} />
                <Route path='/addImg' component={AddImagePage}/>


            </div>
        </BrowserRouter>
    )
    }


}
export default MainPageContent