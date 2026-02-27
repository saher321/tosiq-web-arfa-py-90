import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'
import { useParams } from 'react-router'
import axios from 'axios';
import { USERS_API } from '../utils/APIS';

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

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

  const tableData1 = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 28 },
    { id: 3, name: "Mike", age: 22 },
    { id: 4, name: "Sara", age: 30 },
    { id: 5, name: "Tom", age: 27 },
  ];

  const tableData2 = [
    { id: 1, product: "Laptop", price: "$1200" },
    { id: 2, product: "Phone", price: "$800" },
    { id: 3, product: "Tablet", price: "$600" },
    { id: 4, product: "Watch", price: "$300" },
    { id: 5, product: "Headphones", price: "$200" },
  ];

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
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2 text-left">ID</th>
                <th className="border p-2 text-left">Name</th>
                <th className="border p-2 text-left">Age</th>
              </tr>
            </thead>
            <tbody>
              {tableData1.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="border p-2">{row.id}</td>
                  <td className="border p-2">{row.name}</td>
                  <td className="border p-2">{row.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table 2 */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2 text-left">ID</th>
                <th className="border p-2 text-left">Product</th>
                <th className="border p-2 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {tableData2.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="border p-2">{row.id}</td>
                  <td className="border p-2">{row.product}</td>
                  <td className="border p-2">{row.price}</td>
                </tr>
              ))}
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
