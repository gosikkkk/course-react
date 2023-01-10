import React from 'react'
import styles from '../Users/users.module.css'
import usersPhoto from '../../assets/images/users.png'
import { NavLink } from 'react-router-dom'

const User = ({user,followingInProgress,unfollow,follow}) => {

    return (
        <div className={styles.users} key={user.id}>
            <span>
                <NavLink to={'/profile/' + user.id}>
                    <div>
                        <img
                            src={
                                user.photos.small != null
                                    ? user.photos.small
                                    : usersPhoto
                            }
                            className={styles.userPhoto}
                        />
                    </div>
                </NavLink>

                <div>
                    {user.followed ? (
                        <button
                            disabled={followingInProgress.some(
                                (id) => id === user.id
                            )}
                            className={styles.button}
                            onClick={() => {
                                unfollow(user.id)
                            }}
                        >
                            Unfollow
                        </button>
                    ) : (
                        <button
                            disabled={followingInProgress.some(
                                (id) => id === user.id
                            )}
                            className={styles.button}
                            onClick={() => {
                                follow(user.id)
                            }}
                        >
                            Follow
                        </button>
                    )}
                </div>
            </span>

            <span>
                <span>
                    <div className={styles.name}>{user.name}</div>
                </span>

                <span>
                    <div>{user.status}</div>
                </span>
            </span>
        </div>
    )
}

export default User
