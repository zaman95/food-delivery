import React from 'react';
import { restaurantItem, restaurantListProps } from '../types/FoodListing.type';

// Component to render list of restaurants
export default function RestaurantsList({ restaurants }: restaurantListProps) {
  // Define different promotion types with their colors and icons
  const promotionTypes = [
    {
      name: 'gift',
      color: '#00b1ff',
      icon: 'gift',
    },
    {
      name: 'discount',
      color: '#ff696f',
      icon: 'percent',
    },
    {
      name: '1+1',
      color: '#8f64ff',
      icon: '',
    },
  ];

  // Function to render promotion badge based on promotion type
  const getPromotionData = (itemName: string) => {
    // Find promotion type from predefined promotionTypes array
    const promotionItem = promotionTypes.find((item) => item.name === itemName);
    return (
      <span
        className='img-bage'
        style={{ background: promotionItem ? promotionItem.color : '#ff696f' }}
      >
        {/* Render promotion icon if available, otherwise render promotion name */}
        {promotionItem ? (
          promotionItem.icon ? (
            <i className={`fa fa-${promotionItem.icon}`}></i>
          ) : (
            promotionItem.name
          )
        ) : (
          itemName // If no matching promotion type found, render item name
        )}
      </span>
    );
  };

  return (
    <div className='row-wraper'>
      {/* Iterate over restaurants array and render each restaurant card */}
      {restaurants?.map((item: restaurantItem) => {
        return (
          <div key={item.id} className='col-4'>
            <div className='card'>
              <div className='img-wraper'>
                {/* Render promotion badge if promotion exists */}
                {item.promotion ? getPromotionData(item.promotion) : null}
                <img className='card-img' src={item.imageUrl} />
              </div>
              <div className='card-body'>
                {/* Display restaurant name and restaurant type */}
                <h6 className='card-title'>
                  {item.name} - {item.restaurant}
                </h6>
                <div className='bage-wraper'>
                  {/* Display star rating */}
                  <span>
                    <i className='fa fa-star'></i> {item.rating.toFixed(1)}
                  </span>
                  {/* Display cooking time range */}
                  <span>
                    {' '}
                    {item.minCookTime}-{item.maxCookTime}min
                  </span>
                  {/* Display 'New' badge if restaurant is new */}
                  {item.isNew ? <span className='new-bage'>New</span> : null}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
