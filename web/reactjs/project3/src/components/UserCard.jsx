import React from 'react'
import { Link } from 'react-router'

const UserCard = ({user}) => {
  return (
    <div className='p-3 rounded shadow'>
        {/* <Link to={`/users/${user.id}`}>
            {user.firstName}
        </Link> */}

        <div>
            <div>
                <img src={`${user.image}`} className='rounded-full h-16 w-16' alt="" />
            </div>
            <div>
                <span className='text-xl block font-bold'>{user.firstName} {user.lastName}</span>
                <span className='text-gray-500'>{user.email}</span>
            </div>
        </div>
        <div className='my-4'>
            <div>
                <div className='text-[11px] text-gray-500'>Company name</div>
                <div>{user.company.name}</div>
            </div>
            <div>
                <div className='text-[11px] text-gray-500'>Department</div>
                <div>{user.company.department}</div>
            </div>
            <div>
                <div className='text-[11px] text-gray-500'>Designation</div>
                <div>{user.company.title}</div>
            </div>
        </div>
        <div className='text-right text-sm'>
            <Link className='px-2 py-1 bg-blue-500 text-gray-50 rounded' to={`/users/${user.id}`}>
                View More
            </Link>
        </div>
    </div>
  )
}

export default UserCard
