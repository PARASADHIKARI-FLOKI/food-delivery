import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import Footer from '../components/Footer'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {
  const {
    navigate,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_charges,
    foods,
    token,
  } = useContext(ShopContext)

  const [method, setMethod] = useState('cod') // default payment

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    country: '',
    state: '',
    zipcode: '',
    phone: '',
  })

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setFormData((data) => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      let orderItems = []

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              foods.find((food) => food.id === items)
            )
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quntity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_charges,
      }

      switch (method) {
        case 'cod':
          const response = await axios.post(
            'http://localhost:5002/api/order/place',
            orderData,
            { headers: { token } }
          )
          if (response.data.success) {
            setCartItems({})
            navigate('/orders')
          } else {
            toast.error(response.data.message)
          }
          break

        default:
          toast.error('Please select a valid payment method.')
          break
      }
    } catch (error) {
      console.error(error)
      toast.error('Something went wrong while placing your order.')
    }
  }

  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <form onSubmit={onSubmitHandler}>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left side - Delivery Info */}
          <div className="flex-1">
            <Title
              title1={'Delivery'}
              title2={'Information'}
              title1Styles={
                'text-[24px] leading-tight md:text-[28px] md:leading-[1.3] mb-4 font-bold'
              }
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                className="input"
                required
                onChange={onChangeHandler}
                value={formData.firstName}
                type="text"
                name="firstName"
                placeholder="First Name"
              />
              <input
                className="input"
                required
                onChange={onChangeHandler}
                value={formData.lastName}
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
            <input
              className="input"
              required
              onChange={onChangeHandler}
              value={formData.email}
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="input"
              required
              onChange={onChangeHandler}
              value={formData.phone}
              type="text"
              name="phone"
              placeholder="Phone Number"
            />
            <input
              className="input"
              required
              onChange={onChangeHandler}
              value={formData.street}
              type="text"
              name="street"
              placeholder="Street"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                className="input"
                required
                onChange={onChangeHandler}
                value={formData.city}
                type="text"
                name="city"
                placeholder="City"
              />
              <input
                className="input"
                required
                onChange={onChangeHandler}
                value={formData.state}
                type="text"
                name="state"
                placeholder="State"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                className="input"
                required
                onChange={onChangeHandler}
                value={formData.zipcode}
                type="text"
                name="zipcode"
                placeholder="Zip Code"
              />
              <input
                className="input"
                required
                onChange={onChangeHandler}
                value={formData.country}
                type="text"
                name="country"
                placeholder="Country"
              />
            </div>
          </div>

          {/* Right side - Cart Summary and Payment */}
          <div className="w-full lg:w-[40%] space-y-6">
            <CartTotal />

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                Payment <span className="text-green-600">Method</span>
              </h3>
              <div className="flex gap-3">
                <div
                  onClick={() => setMethod('stripe')}
                  className={`${
                    method === 'stripe'
                      ? 'bg-[#217041] text-white'
                      : 'bg-white ring-1 ring-slate-900/10 hover:bg-gray-100'
                  } cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-all`}
                >
                  Stripe
                </div>
                <div
                  onClick={() => setMethod('cod')}
                  className={`${
                    method === 'cod'
                      ? 'bg-[#217041] text-white'
                      : 'bg-white ring-1 ring-slate-900/10 hover:bg-gray-100'
                  } cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-all`}
                >
                  Cash on Delivery
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#404040] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-[#303030] transition"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>

      <Footer />
    </section>
  )
}

export default PlaceOrder
