import React from 'react'
import { useForm } from 'react-hook-form'
import { PR_ADD_API } from '../utils/api.js'
import axios from 'axios'

const AddProduct = () => {
  const { register, handleSubmit } = useForm()

  const handleAddProduct = async (data) => {
    try {
      const response = await axios.post(PR_ADD_API, data)
      if (response.data.status == true){
        console.log(response.data)
      } else {
        console.log("Failed to insert data")
      }
    } catch (error) {
      console.log("ERR:", error)
    }
  }
  return (
    <div>
      <h2>Add product details</h2>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div>
          <label>Name</label> <br />
          <input {...register("Name")} type='text' />
        </div>
        
        <div>
          <label>Price</label> <br />
          <input  {...register("Price")} type='text' />
        </div>

        <br />

        <div><button>Add new product</button></div>

      </form>
    </div>
  )
}

export default AddProduct