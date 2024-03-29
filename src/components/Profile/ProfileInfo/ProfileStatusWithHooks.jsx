import React from "react";
import { useState, useEffect } from "react";
import s from './ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode ] = useState(false)
    let [status, setStatus]  = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]) 

    const activateEditMode = () =>{
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

        return (
            <>
                <div className={s.info}>
                    { !editMode &&
                    <div className={s.status}>
                        <b>Status</b>: <span onClick={activateEditMode}>{props.status || 'no status'}</span>
                    </div>
                    }

                    {editMode && 
                    <div className={s.status}>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                    </div>
                    }
                </div>  

        </>
)
}


export default ProfileStatusWithHooks;

