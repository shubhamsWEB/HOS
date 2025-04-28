import dummyProducts from './dummyProducts';

// Extract unique categories from dummy products
const extractUniqueValues = (products, property) => {
  const allValues = products.flatMap(product => product[property] || []);
  return [...new Set(allValues)];
};

// Get unique categories and collections
const uniqueCategories = extractUniqueValues(dummyProducts, 'categories');
const uniqueCollections = extractUniqueValues(dummyProducts, 'collections');

// Price ranges for filtering
export const priceOptions = [
  { name: 'Under ₹50,000', value: 'under-50000' },
  { name: '₹50,000 - ₹100,000', value: '50000-100000' },
  { name: '₹100,000 - ₹200,000', value: '100000-200000' },
  { name: 'Above ₹200,000', value: 'above-200000' },
];

// Category options for filtering
export const categoryOptions = uniqueCategories.map(category => ({
  name: category.charAt(0).toUpperCase() + category.slice(1),
  value: category
}));

// Collection options for filtering
export const collectionOptions = uniqueCollections.map(collection => ({
  name: collection.charAt(0).toUpperCase() + collection.slice(1),
  value: collection
}));

// Material options for filtering
export const materialOptions = [
  { name: 'Yellow Gold', value: 'yellow-gold' },
  { name: 'White Gold', value: 'white-gold' },
  { name: 'Rose Gold', value: 'rose-gold' },
  { name: 'Platinum', value: 'platinum' },
];

// Brand options (if applicable)
export const brandOptions = [
  { name: 'House of Sansa', value: 'hos' },
];

// Size options for rings
export const sizeOptions = [
  { name: 'Size 5', value: '5' },
  { name: 'Size 6', value: '6' },
  { name: 'Size 7', value: '7' },
  { name: 'Size 8', value: '8' },
  { name: 'Size 9', value: '9' },
];

// Diamond cut options
export const cutOptions = [
  { name: 'Round', value: 'round' },
  { name: 'Princess', value: 'princess' },
  { name: 'Emerald', value: 'emerald' },
  { name: 'Oval', value: 'oval' },
  { name: 'Cushion', value: 'cushion' },
];