import React from "react"

export default function CategoriesList() {
  return (
    <ul className='tab-list'>
      <li className='active'>
        <a href='#' className='tab-item'>
          All
        </a>
      </li>
      <li>
        <a href='#' className='tab-item'>
          Suchsi
        </a>
      </li>
      <li>
        <a href='#' className='tab-item'>
          Piza
        </a>
      </li>
      <li>
        <a href='#' className='tab-item'>
          Burger
        </a>
      </li>
      <li>
        <a href='#' className='tab-item'>
          Hot Meal
        </a>
      </li>
      <li>
        <a href='#' className='tab-item'>
          Drinks
        </a>
      </li>
      <li>
        <a href='#' className='tab-item'>
          Dessert
        </a>
      </li>
    </ul>
  );
}
