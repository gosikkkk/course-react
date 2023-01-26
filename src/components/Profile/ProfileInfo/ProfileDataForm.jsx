import React from "react"
import { reduxForm } from "redux-form"
import { createField, Input, Textarea } from "../../common/FormControls/FormControls"
import s from './ProfileInfo.module.css'



export const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
                <div><button>Save</button></div>
                {error && <div className={s.formSummaryError}>{error}</div>}

                <div> <b>Full name</b>: {createField("Full name", "fullName", [], Input)} </div>
                <div> 
                    <b>looking for a job</b>: {createField("", "lookingForAJob",[], Input, {type:"checkbox"})}
                </div>
                <div>
                    <b>My professional skills</b>
                    {createField("My professional skills", "lookingForAJobDescription",[], Textarea)}
                </div>
                <div> <b>About Me</b>
                    {createField("About me", "aboutMe",[], Textarea)}
                </div>

                <div> <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contact}>
                                <b>{key}: {createField(key,"contacts." + key, [], Input)}</b>
                            </div>
                    })} 
                </div>
</form>
}

const ProfileDataFormReduxForm = reduxForm({form:"edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm