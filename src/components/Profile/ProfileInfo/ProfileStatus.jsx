import React from 'react'
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status,
            })
    }

    render() {
        return (
            <>
                <div className={s.info}>
                    {!this.state.editMode && (
                        <div className={s.status}>
                            <span onClick={this.activateEditMode}>
                                {this.props.status || 'no status'}
                            </span>
                        </div>
                    )}

                    {this.state.editMode && (
                        <div className={s.status}>
                            <input
                                onChange={this.onStatusChange}
                                autoFocus={true}
                                onBlur={this.deactivateEditMode}
                                value={this.state.status}
                            ></input>
                        </div>
                    )}

                    <div>{this.props.profile.aboutMe}</div>
                    <div>{this.props.profile.contacts.github}</div>
                    <div>{this.props.profile.lookingForAJobDescription}</div>
                    <div>{this.props.profile.fullName}</div>
                </div>
            </>
        )
    }
}

export default ProfileStatus
