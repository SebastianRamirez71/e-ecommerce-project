import React from 'react'
import "./Category.css"
import FilterProducts from '../FilterProducts/FilterProducts'
function Category() {
  return (

    <ul className='categories' style={{listStyleType:"none", textAlign:"center", marginBottom:"30px"}}>
        <li>INICIO</li>
        <li>CARRITO</li>
        <li>INFO</li>
        <li>CONTACTO</li>
        <li>INFO</li>
    </ul>

  )
}

export default Category