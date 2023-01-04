import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) =>{

    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
              
            <div className={s.descriptionBlock}>
                <div><img src={props.profile.photos.large}/></div>

                <ProfileStatusWithHooks status={props.status} 
                                profile={props.profile} 
                                updateStatus={props.updateStatus}/> 
            </div>

      </div>
)
}

export default ProfileInfo;

