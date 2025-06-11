import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Order = () => {

  const {token,currency}=useContext(ShopContext)

  const [orderData, setOrderData]=useState([])

  const loadOrderData=async ()=>{
    try {
      if(!token){
        return null
      }
      const response=await axios.post("http://localhost:5002/api/order/userorders",{},{headers:{token}})
       console.log(response.data)
      if(response.data.success){
        let allOrdersItems=[]

        response.data.orders.map((order)=>{
           order.items.map((item)=>{
            item['status']=order.status
            item['payment']=order.payment
            item['paymentMethod']=order.paymentMethod
            item['date']=order.date
            allOrdersItems.push(item)
           })
        })
        // console.log(allOrdersItems)
        setOrderData(allOrdersItems)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    loadOrderData()
  },[token])
  return (
    <div>
      order
    </div>
  )
}

export default Order
