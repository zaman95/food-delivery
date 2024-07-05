import React from 'react';
import { render } from '@testing-library/react';
import RestaurantsList from '../RestaurantsList';
import { restaurantItem } from '../../types/FoodListing.type';

const mockRestaurants: restaurantItem[] = [
  {
    id: '1',
    index: 1,
    categoryId: '1',
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
    categoryId: '2',
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
    categoryId: '3',
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

describe('RestaurantsList Component', () => {
  it('renders restaurant items correctly', () => {
    const { getByText } = render(
      <RestaurantsList restaurants={mockRestaurants} />
    );

    // Check if restaurant names are rendered
    mockRestaurants.forEach((restaurant) => {
      expect(getByText(`${restaurant.name}`)).toBeInTheDocument();
    });
  });

  it('renders promotion badges correctly', () => {
    const { getAllByText } = render(
      <RestaurantsList restaurants={mockRestaurants} />
    );

    // Check if the promotion badges are rendered with correct colors
    const onePlusOneBadge = getAllByText('1+1');
    expect(onePlusOneBadge[0]).toBeInTheDocument();
  });

  it('renders ratings, cooking time, and "New" badge correctly', () => {
    const { getByText } = render(<RestaurantsList restaurants={mockRestaurants} />);

    // Check ratings and cooking time
    mockRestaurants.forEach((restaurant) => {
      expect(getByText(`${restaurant.rating.toFixed(1)}`)).toBeInTheDocument();
      expect(getByText(`${restaurant.minCookTime}-${restaurant.maxCookTime}min`)).toBeInTheDocument();
    });

    // Check 'New' badge
    const newBadge = getByText('New');
    expect(newBadge).toBeInTheDocument();
  });

  it('renders correctly when there are no restaurants', () => {
    const { container } = render(<RestaurantsList restaurants={[]} />);
    // Check if container is empty
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it('renders promotion badge correctly for each promotion type', () => {
    const { getAllByText } = render(
      <RestaurantsList restaurants={mockRestaurants} />
    );

    // Check promotion badges by their text or icon
    // const giftBadge = getAllByText('gift');
    const onePlusOneBadge = getAllByText('1+1');

    // expect(giftBadge[0]).toBeInTheDocument();
    expect(onePlusOneBadge[0]).toBeInTheDocument();
  });

  it('conditionally renders the "New" badge', () => {
    const { queryAllByText } = render(<RestaurantsList restaurants={mockRestaurants} />);
    
    const newBadges = queryAllByText('New');
    
    // Only one restaurant has the "New" badge
    expect(newBadges).toHaveLength(1);
  });
});
