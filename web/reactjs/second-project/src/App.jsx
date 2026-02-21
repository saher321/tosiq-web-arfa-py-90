import React, { useRef } from 'react'
import BoxWrapper from './components/BoxWrapper'
import Card from './components/Card'

const App = () => {
  let number1 = useRef(null);
  let number2 = useRef(null);

  const printValue = () => {
    let n1 = Number(number1.current.value);
    let n2 = Number(number2.current.value);

    console.log("Sum of two numbers is: ", n1+n2)
  }
  return (
    
    <BoxWrapper class="w-50">
      <div className="bg-blue-500 text-white p-4">App</div>

      <Card>
        <div className="flex items-center gap-3">
          <input
            ref={number1}
            type="text"
            placeholder="Enter number 1"
            className="px-4 py-2 border border-gray-300 rounded-xl 
                      focus:outline-none focus:ring-2 focus:ring-blue-500 
                      focus:border-blue-500 transition duration-200"
          />

          <input
            ref={number2}
            type="text"
            placeholder="Enter number 2"
            className="px-4 py-2 border border-gray-300 rounded-xl 
                      focus:outline-none focus:ring-2 focus:ring-blue-500 
                      focus:border-blue-500 transition duration-200"
          />

          <button
            onClick={printValue}
            className="px-5 py-2 bg-blue-600 text-white text-nowrap font-medium 
                      rounded-xl hover:bg-blue-700 
                      transition duration-200"
          >
            Print value
          </button>
        </div>
      </Card>

    </BoxWrapper>
    
  )
}

export default App