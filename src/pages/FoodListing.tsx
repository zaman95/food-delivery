import React from "react"
import CategoriesList from '../components/CategoriesList';
import RestaurantsList from '../components/RestaurantsList';

export default function FoodListing() {
  return (
    <section className='section-wraper'>
      <div className='search-files'>
        <input type='text' name='' placeholder='Enter restaurant name...' />
        <i className='fa fa-search'></i>
      </div>
      <CategoriesList />
      <div className='row-wraper'>
        <RestaurantsList />
      </div>
    </section>
  );
}
