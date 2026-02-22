import React from 'react'
import WebLayout from '../layouts/WebLayout'
import { useParams } from 'react-router'

const UserDetails = () => {
  const params = useParams();
  return (
    <WebLayout>
      User details #{params.id}
    </WebLayout>
  )
}

export default UserDetails
