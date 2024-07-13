# Food Delivery App

![Project Image](./public/vite.svg)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Project-Structure](#project-structure)

## Description

This project is a React-based Food Delivery App that allows users to browse restaurants, filter by categories, and search for specific restaurants by name. It demonstrates frontend development skills in React, state management, API integration, and responsive UI design.

## Features

- Browse restaurants by categories.
- Search for restaurants by name.
- Pagination for restaurant listings.
- Responsive design for mobile and desktop.

## Installation

To run this project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/yourusername/food-delivery.git

# Navigate to the project directory
cd food-delivery

# Install dependencies
npm install
```

## Usage
```bash
# Run the development server
npm run dev
```

## Tests

```bash
# Run tests
npm test
```

## Project Structure
```bash
food-delivery/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
|   |   |── tests/
│   |   |    ├── CategoriesList.test.tsx
│   |   |    ├── RestaurantsList.test.tsx
|   |   |    └── ...
│   │   ├── CategoriesList.tsx
│   │   ├── RestaurantsList.tsx
│   │   └── ...
│   │
│   ├── services/
│   │   ├── foodService.ts
│   │   └── ...
│   │
│   ├── types/
│   │   ├── FoodListing.type.ts
│   │   └── ...
|   |
│   ├── styles/
│   │   ├── global.css
│   │   └── ...
|   |
│   |── pages/
|   |   |── tests/
│   |   |    ├── FoodListing.test.tsx
|   |   |    └── ...
│   │   ├── FoodListing.tsx
│   │   └── ...
|   |
│   ├── App.tsx
│   ├── index.tsx
│   ├── setupTests.tsx
│   └── ...
│
├── tests/
│   ├── FoodListing.test.tsx
│   ├── RestaurantsList.test.tsx
│   └── ...
│
├── README.md
├── package.json
└── ...
```
