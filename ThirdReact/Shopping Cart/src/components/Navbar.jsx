import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(){
    return(
        <>
        <div className='navbar'>
            <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>


            
        </div>
        </>
    )
}