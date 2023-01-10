import React from 'react'
import Pagination from '../common/Paginator/Pagination'
import User from './User'

const Users = ({
    currentPage,
    onPageChanged,
    totalUsersCount,
    pageSize,
    users,
    ...props
}) => {
    return (
        <div>
            <Pagination
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
            />

            {users.map((u) => (
                <User
                    user={u}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}
                    key={u.id}
                />
            ))}
        </div>
    )
}

export default Users
