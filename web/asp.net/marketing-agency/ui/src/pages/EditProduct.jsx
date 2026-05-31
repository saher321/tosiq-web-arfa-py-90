import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
import { PR_UD_API, PR_VW_API } from '../utils/api'
const EditProduct = () => {
    const params = useParams()
    const { register, reset, setValue, handleSubmit } = useForm()
    const navigate = useNavigate();

    const ViewSingleProduct = async () => {
        try {
            const response = await axios.get(PR_VW_API + "/" + params.id)
            console.log(response.data)
            if (response.data.status == false) {
                console.log(response.data.message)
            }
            // reset(response.data.product)
            setValue('Name', response.data.product.name)
            setValue('Price', response.data.product.price)
        } catch (error) {
            console.log("Err:", error)
        }
    }

    const handleEditProduct = async (data) => {
        try {
            const response = await axios.put(PR_UD_API + "/" + params.id, data)
            if (response.data.status == false) {
                console.log(response.data.message)
            }
            // reset(response.data.product)
            navigate('/')
        } catch (error) {
            console.log("Err:", error)
        }
    }

    useEffect(() => {
        ViewSingleProduct()
    }, [params.id])

    return (
        <div>
            <h2>Edit Product #{params.id}</h2>
            <form onSubmit={handleSubmit(handleEditProduct)}>
                <div>
                    <label>Name</label> <br />
                    <input {...register("Name")} type='text' />
                </div>
                
                <div>
                    <label>Price</label> <br />
                    <input  {...register("Price")} type='text' />
                </div>

                <br />

                <div><button>Edit product</button></div>

            </form>
        </div>
    )
}

export default EditProduct