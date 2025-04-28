import dummyProducts from './dummyProducts';

// Extract unique categories from dummy products
const extractUniqueCategories = () => {
  const allCategories = dummyProducts.flatMap(product => product.categories || []);
  return [...new Set(allCategories)];
};

const uniqueCategories = extractUniqueCategories();

// Create the products category array with 'All' as the first option
export const productsCategory = [
  {
    id: 0,
    title: 'All',
    isActive: true,
    path: ''
  },
  ...uniqueCategories.map((category, index) => ({
    id: index + 1,
    title: category.charAt(0).toUpperCase() + category.slice(1),
    isActive: false,
    path: category
  }))
];

// Create collections array for navigation
const extractUniqueCollections = () => {
  const allCollections = dummyProducts.flatMap(product => product.collections || []);
  return [...new Set(allCollections)];
};

const uniqueCollections = extractUniqueCollections();

export const productCollections = uniqueCollections.map((collection, index) => ({
  id: index + 1,
  title: collection.charAt(0).toUpperCase() + collection.slice(1),
  isActive: false,
  path: collection
}));