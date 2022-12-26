import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const cart = useSelector((state) => state.cartProducts.cart)
  return (
    <nav class="navbar navbar-expand-lg bg-white py-3 shadow-sm">
  <div class="container">
    {/* <NavLink class="navbar-brand" to='/'>Boda</NavLink> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <div className='buttons'>
        <NavLink className='btn btn-outline-dark m-2' to='/' >Boda</NavLink>
        <NavLink className='btn btn-outline-dark m-2'  to='/products'>Products</NavLink>
      </div>
      </ul>


      <div className='buttons'>
        <a href='' className='btn btn-outline-dark'>
          Login
        </a>
        <a href='' className='btn btn-outline-dark m-2'>
          Rgister
        </a>
        <NavLink to='/cart' className='btn btn-outline-dark m-2'>
          Cart ({cart.length})
        </NavLink>
        <NavLink to='/favorite' className='btn btn-outline-dark m-2'>
          favourite
        </NavLink>
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar