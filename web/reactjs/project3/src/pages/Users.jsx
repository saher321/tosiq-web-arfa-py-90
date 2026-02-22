import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout';
import axios from 'axios'
import { USERS_API } from '../utils/APIS';
import { Link } from 'react-router';
const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(USERS_API);
        setUsers(response.data.users);
        setIsLoading(false)
      } catch (error) {
        console.log("ERROR: ", error);
      }
    }
    getAllUsers();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <WebLayout>
      <div>
        Users page
      </div>
      <div className='bg-gray-200'>
        <ul>
          {users.map((user, i) => {
            return (
              <li key={i}>
                <Link to={`/users/${user.id}`}>
                  {user.firstName}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </WebLayout>
  )
}

export default Users
