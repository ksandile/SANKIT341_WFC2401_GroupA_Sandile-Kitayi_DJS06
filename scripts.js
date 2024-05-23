// List of provinces
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// List of names
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// List of products with prices
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// ForEach Basics 
// Logs each name and each province separately.
// Logs each name with its corresponding province in the format "Name (Province)".
console.log("Names:");
names.forEach(name => console.log(name));

console.log("Provinces:");
provinces.forEach(province => console.log(province));

console.log("Name (Province):");
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Uppercase Transformation
// Uses map to create a new array with all province names in uppercase and logs it.
const upperCaseProvince = provinces.map(province => province.toUpperCase());
console.log("Uppercase Provinces:", upperCaseProvince);

// Name Lengths
// Uses map to create a new array containing the length of each name and logs it.
const nameLengths = names.map(name => name.length);
console.log("Name Lengths:", nameLengths);

// Sorting
// Uses sort to alphabetically sort the provinces and logs the sorted array.
const sortedProvinces = [...provinces].sort();
console.log("Sorted Provinces:", sortedProvinces);

// Filtering Cape
// Uses filter to remove provinces containing "Cape" and logs the count of the remaining provinces.
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log("Count of Remaining Provinces:", filteredProvinces.length);

// Finding 'S'
// Uses map to create a boolean array indicating whether each name contains the letter 'S' and logs it.
const containsS = names.map(name => name.includes('S'));
console.log("Names Containing 'S':", containsS);

// Creating Object Mapping
// Uses reduce to create an object that maps each name to its respective province and logs the resulting object.
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log("Name to Province Mapping:", nameProvinceMapping);


// Advanced Exercises

// Log Products
// Uses map to extract product names and join to create a comma-separated string.
console.log("Products:", (() => {
  return products.map(item => item.product).join(', ');
})());

// Filter by Name Length
// Uses filter to keep products with names of length 5 or less and map + join to format the result.
console.log("Products with names <= 5 characters:", (() => {
  return products.filter(item => item.product.length <= 5).map(item => item.product).join(', ');
})());

// Price Manipulation
// Uses filter to remove products without valid prices, map to convert string prices to numbers, and reduce to calculate the total price.
console.log("Total Price:", (() => {
  return products
    .filter(item => item.price !== '' && !isNaN(item.price) && item.price !== ' ')
    .map(item => typeof item.price === 'string' ? Number(item.price.trim()) : item.price)
    .reduce((acc, price) => acc + price, 0);
})());

// Concatenate Product Names
// Uses reduce to concatenate all product names into a single string.
console.log("Concatenated Product Names:", (() => {
  return products.reduce((acc, item) => acc + item.product, '');
})());

// Find Extremes in Prices
// Filters, maps, and finds the highest and lowest prices using Math.max and Math.min.
console.log("Price Extremes:", (() => {
  const prices = products
    .filter(item => item.price !== '' && !isNaN(item.price) && item.price !== ' ')
    .map(item => typeof item.price === 'string' ? Number(item.price.trim()) : item.price);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  return `Highest: ${maxPrice}. Lowest: ${minPrice}.`;
})());

// Object Transformation
// Uses reduce to create a new object with keys as product names and values as objects containing name and cost.
console.log("Transformed Products Object:", (() => {
  return products.reduce((acc, item) => {
    acc[item.product] = { name: item.product, cost: item.price };
    return acc;
  }, {});
})());