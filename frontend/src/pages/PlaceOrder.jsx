import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import Footer from '../components/Footer'
import { useContext } from 'react'
import { useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'

const PlaceOrder = () => {

  const [navigate,cartItems,getCartAmount,delivery_charges,foods,token]=useContext(ShopContext)
  const [method, setMethod]=useState('cod')// default payment

 const [formData,setFormData]=useState({
  firstName:"",
  lastName:"",
  email:"",
 street :"",
  city:"",
  country:"",
  state:"",
  zipcode:"",
  phone:"",
 })

 const onChangeHandler=(e)=>{
  const name=e.target.name
  const value=e.target.value

  setFormData(data=>({...data,[name]:value}))
 }

  const onSubmitHandler=async(event)=>{
    event.preventDefault()

    try {
      let orderItems=[]
      for(const items in cartItems ){
        for(const item in cartItems[items]){
          if(cartItems[items][item] > 0){
            const itemInfo=structuredClone(foods.find(food=>food.id === items))
           if(itemInfo){
            itemInfo.size=item
            itemInfo.quntity=cartItems[items][item]
            orderItems.push(itemInfo)
           }
          }
        }
      }
       let orderData={
        address:formData,
        items:orderItems,
        amount:getCartAmount()+ delivery_charges
       }

       switch(method){
        case 'cod':
            const response=await axios.post('http://localhost:5002/api/order/place',orderData,{headers:{token}})
           console.log(object)
            break;

        default:
          break;
       }
    } catch (error) {
      
    }
  }
  return (
   <section>
    <form onSubmit={onSubmitHandler}>
       <div>

        {/* left side devlivery information */}
        <div>
        <Title title1={'Delivery'} title2={'Information'} title1Styles={'text-[24px] leading-tight md:text-[28px] md:leading-[1.3] mb-4 font-bold;'}/>
        <div>
          <input required onChange={onChangeHandler} value={FormData.firstName} type="text" name='firstName'placeholder='First Name' />
          <input required onChange={onChangeHandler} value={FormData.lastName} type="text" name='lastName'placeholder='Last Name' />
        </div>
         <input required onChange={onChangeHandler} value={FormData.email} type="email" name='email'placeholder='Email' />
         <input required onChange={onChangeHandler} value={FormData.phone} type="text" name='phone'placeholder='Phone Number' />
         <input required onChange={onChangeHandler} value={FormData.street} type="text" name='street'placeholder='Street' />
          <div>
          <input required onChange={onChangeHandler} value={FormData.city} type="text" name='city'placeholder='City' />
          <input required onChange={onChangeHandler} value={FormData.state} type="text" name='state'placeholder='State' />
          </div>
          <div>
        <input required onChange={onChangeHandler} value={FormData.zipcode} type="text" name='zipcode'placeholder='Zip Code' />
        <input required onChange={onChangeHandler} value={FormData.country} type="text" name='country'placeholder='Country' />
          </div>
        </div>
        {/* right side cart total */}
        <div>
          <CartTotal/>
          {/* payment method */}
          <div>
            <h3>Payment <span>Method</span></h3>
            <div>
              <div onClick={()=>setMethod('stripe')} className={`${method==='stripe' ? "text-[14px] font-[500] bg-[#217041] text-white px-7 py-3.5 rounded-full transition-all":"text-[14px] font-[500] bg-white ring-1 ring-slate-900/10 px-7 py-3.5 rounded-full hover:bg-[#f9f9f9] transition-all duration-300"} !py-1 text-xs cursor-pointer`}>Stripe</div>
              <div onClick={()=>setMethod('stripe')} className={`${method==='stripe' ? "text-[14px] font-[500] bg-[#217041] text-white px-7 py-3.5 rounded-full transition-all":"text-[14px] font-[500] bg-white ring-1 ring-slate-900/10 px-7 py-3.5 rounded-full hover:bg-[#f9f9f9] transition-all duration-300"} !py-1 !px-3 text-xs cursor-pointer`}>Cash on Delivery</div>
            </div>
          </div>
          <div>
            <button type='submit' className='text-[14px] font-[500] bg-[#404040] text-white px-7 py-3.5 !rounded'>Place Order</button>
          </div>
        </div>
       </div>
    </form>
    <Footer/>
   </section>
  )
}

export default PlaceOrder
