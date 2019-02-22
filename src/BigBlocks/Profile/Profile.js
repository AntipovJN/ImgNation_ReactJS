import React from 'react'
import ProfileAvatar from './../../resources/Profileimg/main_816802_original.jpg'
import noneImg from './../../resources/Profileimg/Anonymous_User.png'
import css from './Profile.module.css'
import {faPlus, faPen, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Profile = () => {

    return (
        <div className={css.grid}>
            <div className={css.profileAvatar}>
                <img src={ProfileAvatar} alt='Profile_avatar'/>
            </div>
            <div className={css.profileDescription}>
                <div className={css.navIcons}>
                    <a href='/addImg'><FontAwesomeIcon icon={faPlus} size='lg'/></a>
                    <FontAwesomeIcon icon={faPen} size='lg'/>
                    <FontAwesomeIcon icon={faPaperPlane} size='lg'/>
                </div>
                <h2>Eugene Antipov</h2>
                <div className={css.profileActivity}>
                    <div><a href='#'>Подписки</a></div>
                    <div><a href='#'>Подписчики</a></div>
                </div>
                Age: unknown<br/>
                Region: Ukraine, Kiev

            </div>
            <div className={css.imgBoards}>
                <div className={css.savedImgBoard}>
                    <div className={css.svd}>
                        <div><img src={noneImg}/></div>
                        <div><img src={noneImg}/></div>
                        <div><img src={noneImg}/></div>
                        <div><img src={noneImg}/></div>
                    </div>
                    <div>Saved Images</div>
                </div>
                <div className={css.savedImgBoard}>
                    <div className={css.svd}>
                        <div><img src={noneImg}/></div>
                        <div><img src={noneImg}/></div>
                        <div><img src={noneImg}/></div>
                        <div><img src={noneImg}/></div>
                    </div>
                    <div>Added Images</div>
                </div>
            </div>
        </div>

    )
}

export default Profile