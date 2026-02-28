import React, { createContext, useState } from 'react'

export const MyContext = createContext();

const ContextData = ({ children }) => {
    const [orders, setOrders] = useState([]);
    let name = "Usman ali";
    let age  = 34;
    const colors = [ "Black", "Gray", "Purple" ];
    const showOrders = () => {
        setOrders(prev => [...prev, newData])
    }
    return (
        <MyContext.Provider value={{name, age, colors, orders, showOrders}}>
            { children }
        </MyContext.Provider>
    )
}

export default ContextData