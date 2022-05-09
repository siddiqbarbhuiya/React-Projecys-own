import React from 'react'
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import { Cart } from '../Context';



const Header = () => {
  const {cart} = useContext(Cart);
  return (
    <div>
      <span className='header'>React Context Api Tutorial</span>
      <ul className="nav">
          <li className="home"><Link to='/'>Home</Link></li>
          <li className="cart"><Link to='/cart'>Cart [{cart.length}]</Link></li>
      </ul>
    </div>
  )
}

export default Header
