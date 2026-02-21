import React, { useEffect, useState } from 'react'
import BoxWrapper from './components/BoxWrapper';
import Card from './components/Card';

const Home = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Alice");

    useEffect(() => {
        console.log("Trigger on every state-change/page-load")
    });

    useEffect(() => {
        console.log("Trigger on page-load")
    }, []);

    useEffect(() => {
        console.log("Trigger on name change");
    }, [name]);

    const printValue = () => {
        setName("Jane")
        setCounter(counter + 1)
    }

  return (
    <BoxWrapper>
        <div className="bg-blue-500 text-white p-4">useEffect()</div>

        <Card>
            {name} {" "}
            <button
            onClick={printValue}
            className="px-5 py-2 bg-blue-600 text-white text-nowrap font-medium 
                      rounded-xl hover:bg-blue-700 
                      transition duration-200"
          >
            Print value {counter}
          </button>
        </Card>
    </BoxWrapper>
  )
}

export default Home
// onload => useEffect
// onCondition => useEffect
// onStateChange => useEffect