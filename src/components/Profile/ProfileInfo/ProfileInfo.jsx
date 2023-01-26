import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import usersPhoto from '../../../assets/images/users.png'
import { useState } from 'react'
import ProfileDataFormReduxForm from './ProfileDataForm'

const ProfileInfo = ({
    profile,
    status,
    updateStatus,
    isOwner,
    savePhoto,
    saveProfile,
}) => {
    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files[0]) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div className={s.profile}>
            <div>
                <div className={s.file}>
                    <img
                        src={profile.photos.large || usersPhoto}
                        className={s.mainPhoto}
                    />
                </div>
                <div>
                    <ProfileStatusWithHooks
                    status={status}
                    profile={profile}
                    updateStatus={updateStatus}
                />
                </div>
                <div>
                {isOwner && (
                        <input type={'file'} onChange={onMainPhotoSelected} />
                    )}
                </div>
            </div>

            <div className={s.edit}>
            <div>
                { editMode 
                    ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner} /> }
                </div>
            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div className={s.formEdit}>
            {isOwner && (
                <div>
                    <button className={s.buttonEdit} onClick={goToEditMode}>Edit</button>
                </div>
            )}
            <div>
                <b>Full name</b>: {profile.fullName}{' '}
            </div>
            <div>
                <b>looking for a job</b>:{' '}
                {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob && (
                <div>
                    <b>My professional skills</b> :{' '}
                    {profile.lookingForAJobDescription}{' '}
                </div>
            )}
            <div>
                <b>About Me</b>: {profile.aboutMe}
            </div>

            <div>
                <b>Contacts</b>:
                {Object.keys(profile.contacts).map((key) => {
                    return (
                        <Contact
                            contactTitle={key}
                            contactValue={profile.contacts[key]}
                        />
                    )
                })}
            </div>
        </div>
    )
}

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default ProfileInfo
