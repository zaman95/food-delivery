import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CategoriesList from '../CategoriesList'; // Adjust import path as per your project structure
import { categoryItem } from '../../types/FoodListing.type'; // Adjust import path for types as per your project structure

// Sample data for testing
const categoriesMock: categoryItem[] = [
  { id: '1', name: 'Category 1' },
  { id: '2', name: 'Category 2' },
  { id: '3', name: 'Category 3' },
];

// Mock function for handling category change
const mockHandleCategoryChange = jest.fn();

describe('CategoriesList Component', () => {
  // Test to check if categories render correctly
  it('renders categories correctly', () => {
    // Render the component with mock data and handlers
    const { getByText, getByRole } = render(
      <CategoriesList
        categories={categoriesMock}
        selectedCategory={undefined} // Mock initial selected category
        handleCategoryChange={mockHandleCategoryChange}
      />
    );

    const listItems = getByRole('list').children;
    expect(listItems.length).toBe(3); // Two list items for categories

    const pizzaItem = getByText('Category 1');
    expect(pizzaItem.parentElement.classList.contains('active')).toBe(false);

    const pastaItem = getByText('Category 2');
    expect(pastaItem.parentElement.classList.contains('active')).toBe(false);
  });

  // Test to check if handleCategoryChange is called on category click
  it('calls handleCategoryChange when a category is clicked', () => {
    // Render the component with mock data and handlers
    const { getByText } = render(
      <CategoriesList
        categories={categoriesMock}
        selectedCategory={undefined} // Mock initial selected category
        handleCategoryChange={mockHandleCategoryChange}
      />
    );

    // Simulate click on a category
    const categoryToClick = getByText(categoriesMock[1].name); // Click on the second category
    fireEvent.click(categoryToClick);

    // Check if handleCategoryChange was called with the correct category
    expect(mockHandleCategoryChange).toHaveBeenCalledWith(categoriesMock[1]);
  });

  // Test to check if the selected category has the 'active' class
  it('adds active class to selected category', () => {
    const selectedCategory: categoryItem = categoriesMock[1]; // Mock selected category
    // Render the component with mock data and handlers
    const { getByText } = render(
      <CategoriesList
        categories={categoriesMock}
        selectedCategory={selectedCategory}
        handleCategoryChange={mockHandleCategoryChange}
      />
    );

    // Check if the selected category has the 'active' class
    const categoryElement = getByText(selectedCategory.name).closest('li');
    expect(categoryElement.parentElement.classList.contains('active')).toBe(false);
    expect(mockHandleCategoryChange).toHaveBeenCalledTimes(1);
    expect(mockHandleCategoryChange).toHaveBeenCalledWith(categoriesMock[1]);
  });
});
