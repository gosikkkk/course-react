import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = ({profile,status,updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={profile.photos.large} />
                </div>

                <ProfileStatusWithHooks
                    status={status}
                    profile={profile}
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo
