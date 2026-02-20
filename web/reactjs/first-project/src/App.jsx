import Button from "./components/Button"
import Heading from "./components/Heading"

const App = () => {

  const btn1 = () => {
    console.log("Button 1 clicked")
  }
  const btn2 = () => {
    console.log("Button 2 clicked")
  }

  return (
    <div>
      <Heading />

      <Button func={btn1} title="Button 1"/>
      <br />
      <Button func={btn2} title="Button 2"/>

    </div>
  )
}

export default App
