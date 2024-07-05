export type categoryItem = {
  id: string;
  name: string;
};

export type categoryListProps = {
  categories: categoryItem[];
  selectedCategory: categoryItem | undefined;
  handleCategoryChange: (category: categoryItem) => void;
};

export type restaurantItem = {
  categoryId: string;
  id: string;
  imageUrl: string;
  index: number;
  isNew: boolean;
  maxCookTime: number;
  minCookTime: number;
  name: string;
  promotion: string;
  rating: number;
  restaurant: string;
};

export type restaurantListProps = {
  restaurants: restaurantItem[];
};
