import React from 'react'
import "./HeaderTag.css"

const HeaderTag = () => {
  return (
    <header>
    <div  className="header-tag-container">
      <ul>
        <li>
          <a href="">SKATEBOARDS</a>
        </li>
        <li>
          <a href="">BANZAI MINIMART</a>
        </li>
        <li>
          <a href="">NEWS</a>
        </li>
        <li>
          <a href="">ABOUT</a>
        </li>
      </ul>
      <img
        src="https://cdn.shopify.com/s/files/1/0606/6788/7856/t/2/assets/banzai-logo.svg?v=15609163023979835111636476142"
        alt="#"
      />
      <div>
        <a href="">SEARCH</a>
        <a href="">CART (0)</a>
      </div>
    </div>
  </header>
  )
}

export default HeaderTag