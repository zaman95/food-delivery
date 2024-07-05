import React, { useEffect, useMemo, useState } from 'react';
import CategoriesList from '../components/CategoriesList';
import RestaurantsList from '../components/RestaurantsList';
import { getCategoriesList, getRestaurantsList } from '../services/foodService';
import { categoryItem, restaurantItem } from '../types/FoodListing.type';

export default function FoodListing() {
  // State to store categories
  const [categories, setCategories] = useState<categoryItem[]>([]);

  // State to store restaurants
  const [restaurants, setRestaurants] = useState<restaurantItem[]>([]);

  // State to track the current page for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // State to store the number of items per page
  const [itemsPerPage] = useState(9);

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState<
    categoryItem | undefined
  >(undefined);

  // State to track the search query input by the user
  const [searchQuery, setSearchQuery] = useState('');

  // State to store the debounced search query
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

  // Effect to fetch data from the API on component mount
  useEffect(() => {
    const getData = async () => {
      const categoriesData = await getCategoriesList();
      const restaurantsData = await getRestaurantsList();

      setCategories(categoriesData);
      setRestaurants(restaurantsData.foods);
    };

    getData();
  }, []);

  // Effect to debounce the search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300); // Adjust the debounce delay as needed

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  // Memoized filtered list of restaurants based on category and search query
  const filteredRestaurants = useMemo(() => {
    // Filter restaurants by selected category
    const filteredCategoryData = selectedCategory
      ? restaurants.filter(
          (item: restaurantItem) => item.categoryId == selectedCategory?.id
        )
      : restaurants;

    // Further filter by search query
    return filteredCategoryData.filter((restaurant: restaurantItem) =>
      restaurant.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );
  }, [restaurants, debouncedSearchQuery, selectedCategory]);

  // Memoized list of restaurants for the current page
  const currentRestaurants = useMemo(() => {
    const indexOfLastRestaurant = currentPage * itemsPerPage;
    return filteredRestaurants.slice(0, indexOfLastRestaurant);
  }, [currentPage, itemsPerPage, filteredRestaurants]);

  // Handler to show more restaurants (load next page)
  const handleShowMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Handler to change the selected category and reset the current page
  const handleCategoryChange = (item: categoryItem) => {
    setSelectedCategory(item);
    setCurrentPage(1);
  };

  return (
    <section className='section-wrapper'>
      <div className='search-files'>
        <input
          type='text'
          placeholder='Enter restaurant name...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <i className='fa fa-search'></i>
      </div>
      <CategoriesList
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <RestaurantsList restaurants={currentRestaurants} />
      {currentRestaurants.length < filteredRestaurants.length && (
        <div className='text-ceter'>
          <button className='show-more-button' onClick={handleShowMore}>
            + Show More
          </button>
        </div>
      )}
    </section>
  );
}
