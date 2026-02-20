import { useState } from "react"
import Button from "./components/Button"
import Heading from "./components/Heading"

const App = () => {
  const [name, setName] = useState("Ali");

  const [ counter, setCounter ] = useState(0)

  const btn1 = () => {
    setName("Muneeb")
    setCounter(counter + 1);
  }
  const btn2 = () => {
    if (counter < 1) return;
    
    setName("Ali")
    setCounter(counter - 1)
  }

  return (
    <div>
      <Heading />
      {name}
      <hr />

      <Button isToggle={true} func={btn1} title="Increment"/> {" "}
      <big>{counter}</big> {" "}
      <Button isToggle={true} func={btn2} title="Decrement"/>

    </div>
  )
}

export default App
