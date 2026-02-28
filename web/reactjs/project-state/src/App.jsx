import React, { useContext } from 'react'
import { MyContext } from './ContextData'

const App = () => {
  let data = useContext(MyContext);
  return (
    
    <>
        <div>App :: {data.name + " " + data.age}</div>

        <div>
            <ul>
                {data?.colors.map((color)=> {
                    return (
                        <li>{color}</li>
                    )
                })}
            </ul>
        </div>

    </>
  )
}

export default App