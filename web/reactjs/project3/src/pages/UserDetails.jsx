import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'
import { useParams } from 'react-router'
import axios from 'axios';
import { USERS_API } from '../utils/APIS';

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  let tblBorder = 'w-full rounded-xl border border-gray-100'
  let th = "border rounded-xl border-gray-200 p-2 text-left"
  let td = "border rounded-xl border-gray-200 p-2"

  useEffect(()=>{
    const singleUser = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(USERS_API);
        const allUsers = response.data.users;
        const singleUser = allUsers.find((user) => params.id == user.id)
        setUser(singleUser);
        setIsLoading(false)
      } catch (error) {
        console.log("ERROR: ", error);
      }
    }
    singleUser();
  }, [params.id]);


  return (
    <WebLayout>
      { isLoading ? "Loading..." :
        <div>
          <div className='text-center'>
            <div className='grid place-items-center'>
              <img src={`${user?.image}`} className='h-20 w-20' alt="" />
            </div>
            <span className='text-xl block font-bold'>{user?.firstName} {user?.lastName}</span>
            <span className='text-gray-500'>{user?.email}</span>
          </div>
          <div className="w-full p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Table 1 */}
        <div className="rounded-xl border border-gray-300 overflow-x-auto">
          <table className={tblBorder}>
            <thead className="bg-gray-100">
              <tr>
                <th colSpan={2} className={th}>Personal information</th>
              </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-gray-50">
                  <td className={td + " text-gray-500"}>Full name</td>
                  <td className={td + " font-bold"}>{user?.firstName + ' ' + user?.lastName}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className={td + " text-gray-500"}>Username</td>
                  <td className={td + " font-bold"}>{user?.username}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className={td + " text-gray-500"}>Email</td>
                  <td className={td + " font-bold"}>{user?.email}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className={td + " text-gray-500"}>Phone</td>
                  <td className={td + " font-bold"}>{user?.phone}</td>
                </tr>
            </tbody>
          </table>
        </div>

        {/* Table 2 */}
        <div className="rounded-xl border border-gray-300 overflow-x-auto">
          <table className={tblBorder}>
            <thead className="bg-gray-100">
              <tr>
                <th colSpan={2} className={th}>Company information</th>
              </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-gray-50">
                  <td className={td + " text-gray-500"}>Comnpany name</td>
                  <td className={td + " font-bold"}>{user?.company?.name}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className={td + " text-gray-500"}>Designation</td>
                  <td className={td + " font-bold"}>{user?.company?.title}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className={td + " text-gray-500"}>Department</td>
                  <td className={td + " font-bold"}>{user?.company?.department}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className={td + " text-gray-500"}>Location</td>
                  <td className={td + " font-bold"}>{user?.company?.address?.city}, {user?.company?.address?.country}</td>
                </tr>
            </tbody>
          </table>
        </div>

        {/* Table 2 */}
        <div className="rounded-xl border border-gray-300 overflow-x-auto">
          <table className={tblBorder}>
            <thead className="bg-gray-100">
              <tr>
                <th colSpan={2} className={th}>Account details</th>
              </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-gray-50">
                  <td className={td + " text-gray-500"}>Account title</td>
                  <td className={td + " font-bold"}>{user?.firstName + ' ' + user?.lastName}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className={td + " text-gray-500"}>IBAN no#</td>
                  <td className={td + " font-bold"}>{user?.bank?.iban}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className={td + " text-gray-500"}>Card expiry</td>
                  <td className={td + " font-bold"}>{user?.bank?.cardExpire}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className={td + " text-gray-500"}>Card number</td>
                  <td className={td + " font-bold"}>{user?.bank?.cardNumber}</td>
                </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
        </div>
      }
    </WebLayout>
  )
}

export default UserDetails
