import React, { useEffect, useState } from 'react'
import { PR_VARIANTS_API } from './utils/api.js'
import axios from 'axios'
const App = () => {

  const [variants, setVariants] = useState([])

  const getProductVariants = async () => {
    try {
      const response = await axios.get(PR_VARIANTS_API)
      console.log(response.data)
      if (response.data.status == true) {
        console.log("Inside console", response.data)
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