import React, { useEffect, useState } from 'react'
import { PR_ALL_API, PR_VARIANTS_API } from './utils/api.js'
import axios from 'axios'
import AddProduct from './pages/AddProduct.jsx'
const App = () => {

  const [ products, setProducts ] = useState([])
  const [ error, setError ] = useState("")
  const [variants, setVariants] = useState([])

  const getProductVariants = async () => {
    try {
      const response = await axios.get(PR_VARIANTS_API)
      if (response.data.status == true) {
        setVariants(response.data.variants)
      } else {
        console.error("ERR: Failed to fetch product variant")
      }
    } catch (error) {
      console.log("ERR:", error)
    }
  }

  const getAllProducts = async () => {
    try {
      const response = await axios.get(PR_ALL_API)
      if (response.data.status == true) {
        setProducts(response.data.products)
      } else {
        setError(response.data.message)
      }
    } catch (error) {
      console.log("ERR: ", error)
    }
  }

  useEffect(() => {
    getAllProducts()
    getProductVariants()

  }, [])

  return (
    <div>


      <AddProduct allProducts={getAllProducts}/>

      <hr />

      <table border={1} cellPadding={10} cellSpacing={0} width={"50%"}>
        <thead>
          <tr align="left">
            <th>Sr#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        { products.map((prd) => {
          return (
            <tr key={prd.id}>
              <td>{prd.id}</td>
              <td>{prd.name}</td>
              <td>{prd.price}</td>
              <td>Edit / Delete</td>
            </tr>
          )
        })

        }
        </tbody>
      </table>

      <hr />

      <h2>
        Product color variants
      </h2>

      <ul>
        {
          variants.map((prVariant, i) => {
            return (
              <li key={i} style={
                {backgroundColor: prVariant, width: "fit-content"}}>{prVariant}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App