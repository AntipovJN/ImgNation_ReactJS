import React, {Component} from 'react'
import {faBomb} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import f from '../Posts.module.css'
class Post extends Component {
    render() {
        const url='/item/'+this.props.img.id;

        //console.log(this.props);
        return (
            <div   >
                <a href={url}>
                <img src={this.props.img.adress}  /> </a>
                <div  >
                    {this.props.img.description}
                </div>
                <div className={f.icon}><FontAwesomeIcon icon={faBomb}/></div>

            </div>


        )
    }
}

export default Post