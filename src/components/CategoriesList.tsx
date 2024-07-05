import React from 'react';
import { categoryItem, categoryListProps } from '../types/FoodListing.type';

export default function CategoriesList({
  categories,
  selectedCategory,
  handleCategoryChange,
}: categoryListProps) {
  return (
    <ul className='tab-list'>
      {categories?.map((item: categoryItem) => (
        <li
          key={item.id}
          className={selectedCategory?.id === item.id ? 'active' : ''}
          onClick={() => handleCategoryChange(item)}
        >
          <a className='tab-item'>{item.name}</a>
        </li>
      ))}
    </ul>
  );
}
