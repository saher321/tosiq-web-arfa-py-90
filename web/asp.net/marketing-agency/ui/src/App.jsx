import React, { useEffect, useState } from 'react'
import { PR_VARIANTS_API } from './utils/api.js'
import axios from 'axios'
import AddProduct from './pages/AddProduct.jsx'
const App = () => {

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

  useEffect(() => {
    getProductVariants()
  }, [])

  return (
    <div>


      <AddProduct />

      <h2>
        Product color variants
      </h2>

      <ul>
        {
          variants.map((prVariant, i) => {
            return (
              <li style={
                {backgroundColor: prVariant, width: "fit-content"}}>{prVariant}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App