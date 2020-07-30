'use strict';
const cartForParty = {
  beer: 20,
  chips: 30,
  cola: 15,
  cheese: 25,
  wine: 30,
};

function calculateTotalPrice(obj) {
  let total = 0;

  for (let property in obj) {
    total += obj[property];
  }
  console.log(`"Total: €${total}"`);
}
calculateTotalPrice(cartForParty);
