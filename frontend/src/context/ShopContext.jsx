import React ,{createContext} from 'react'
import {foods} from '../assets/data'
import { useNavigate } from 'react-router-dom'


export const ShopContext=createContext()

const ShopContextProvider = (props) => {

    const currency=`$`
    const delivery_charges=10
    const navigate =useNavigate()

    const contextValue={foods, currency,delivery_charges,navigate}
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
