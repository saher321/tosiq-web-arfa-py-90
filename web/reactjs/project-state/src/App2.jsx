import React, { useContext } from 'react'
import { MyContext } from './ContextData';

const App2 = () => {
  let data = useContext(MyContext);
  return (
    <>
        <div>App2 :: {data.name + " " + data.age}</div>

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

export default App2