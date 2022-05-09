import React, { useEffect, useState, useContext } from 'react'
import { Cart } from '../Context';
import SingleProduct from './SingleProduct'

const CartPage = () => {
  const {cart} = useContext(Cart);
  const [total, setTotal] = useState();
  useEffect(()=> {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
  }, [cart])
  return (
    <div>
      <span style={{fontSize: 30 }}>My Cart</span><br />
      <span style={{fontSize: 30 }}> Total Price: ${total}</span>
      <div className="product_container">
        {cart.map((prod, id) => {
          return (
            <SingleProduct prod={prod} key={id} />
          )
        })}
      </div>
    </div> 
  )
}

export default CartPage
