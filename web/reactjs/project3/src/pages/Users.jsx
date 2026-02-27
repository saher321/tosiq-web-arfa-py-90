import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout';
import axios from 'axios'
import { USERS_API } from '../utils/APIS';
import { Link } from 'react-router';
import UserCard from '../components/UserCard';
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

  return (
    <WebLayout>
      <div>
        Users
      </div>
      {
        isLoading ? "Loading..." :
        <div>
          <div className='grid grid-cols-12 gap-3'>
            {users.map((user, i) => {
              return (
                <div className="col-span-4" key={i}>
                  <UserCard user={user}/>
                </div>
              )
            })}
          </div>
        </div>
      }
    </WebLayout>
  )
}

export default Users
