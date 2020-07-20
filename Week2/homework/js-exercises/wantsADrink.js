'use strict';

let drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];
for (let i = 0; i < 5; i++) {
  if (i < drinkTypes.length) {
    drinkTray.push(drinkTypes[i]);
  } else if (i < 5) {
    drinkTray.push(drinkTypes[i - drinkTypes.length]);
  }
}

console.log(`Hey guys, I brought a ${drinkTray.sort().join(', ')}!`);
