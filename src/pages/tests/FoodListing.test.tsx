import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FoodListing from '../FoodListing';
import { getCategoriesList, getRestaurantsList } from '../../services/foodService';
import { categoryItem, restaurantItem } from '../../types/FoodListing.type';

// Mock the service calls
jest.mock('../../services/foodService', () => ({
  getCategoriesList: jest.fn(),
  getRestaurantsList: jest.fn(),
}))

const mockCategories: categoryItem[] = [
  { id: '1', name: 'Category 1' },
  { id: '2', name: 'Category 2' },
];

const mockRestaurants: restaurantItem[] = [
    {
      id: '1',
      index: 1,
      categoryId: 'Category 1',
      name: 'Restaurant 1',
      restaurant: 'Type 1',
      imageUrl: 'http://example.com/image1.jpg',
      rating: 4.5,
      minCookTime: 15,
      maxCookTime: 30,
      promotion: 'gift',
      isNew: true
    },
    {
      id: '2',
      index: 2,
      categoryId: 'Category 2',
      name: 'Restaurant 2',
      restaurant: 'Type 2',
      imageUrl: 'http://example.com/image2.jpg',
      rating: 3.8,
      minCookTime: 20,
      maxCookTime: 40,
      promotion: 'discount',
      isNew: false,
    },
    {
      id: '3',
      index: 3,
      categoryId: 'Category 2',
      name: 'Restaurant 3',
      restaurant: 'Type 3',
      imageUrl: 'http://example.com/image3.jpg',
      rating: 4.2,
      minCookTime: 10,
      maxCookTime: 20,
      promotion: '1+1',
      isNew: false,
    },
  ];

describe('FoodListing Component', () => {
  beforeEach(() => {
    (getCategoriesList as jest.Mock).mockReturnValue(mockCategories);
    (getRestaurantsList as jest.Mock).mockReturnValue({ foods: mockRestaurants });
  });

  it('renders categories and restaurants on initial load', async () => {
    render(<FoodListing />);
    await waitFor(() => {
      mockCategories.forEach((category) => {
        expect(screen.getByText(category.name)).toBeInTheDocument();
      });
      mockRestaurants.forEach((restaurant) => {
        expect(screen.getByText(`${restaurant.name}`)).toBeInTheDocument();
      });
    });
  });

  it('filters restaurants based on search query', async () => {
    render(<FoodListing />);
    await waitFor(() => screen.getByPlaceholderText('Enter restaurant name...'));

    // Enter a search query
    fireEvent.change(screen.getByPlaceholderText('Enter restaurant name...'), { target: { value: 'Restaurant 1' } });

    await waitFor(() => {
      expect(screen.getByText('Restaurant 1')).toBeInTheDocument();
      expect(screen.queryByText('Restaurant 2')).not.toBeInTheDocument();
      expect(screen.queryByText('Restaurant 3')).not.toBeInTheDocument();
    });
  });

});
