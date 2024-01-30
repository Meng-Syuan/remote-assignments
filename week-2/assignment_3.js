// Assignment 3: Function, Array, and Object
// Complete the function below to calculate the total price of all products after applying a
// discount.

function calculate(data) {
  let discount = Object.values(data)[0];
  let products = Object.values(data)[1];
  let priceSum = 0;
  for (let i = 0; i < products.length; i++) {
    priceSum += Object.values(products[i])[1];
  }
  return priceSum * (1 - discount);
}

const discountedPrice = calculate({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 300,
    },
  ],
});
console.log(discountedPrice); // show the total price of all products after applying a discount
