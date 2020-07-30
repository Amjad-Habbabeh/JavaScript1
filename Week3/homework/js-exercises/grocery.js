'use strict';
const shoppingCart = ['bananas', 'milk'];

function addToShoppingCart(item) {
  if (shoppingCart.length < 3) {
    shoppingCart.push(item);
  } else {
    shoppingCart.shift();
    shoppingCart.push(item);
  }
  console.log(`"You bought ${shoppingCart}!"`);
}
addToShoppingCart('chocolate');
addToShoppingCart('waffles');
addToShoppingCart('tea');
