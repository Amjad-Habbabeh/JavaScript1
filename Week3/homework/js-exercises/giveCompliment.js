'use strict';
function giveCompliment(Amjad) {
  const compliments = [
    'great',
    'awesome',
    'lovely',
    'smart',
    'good',
    'gentell',
    'excellent',
    'noble',
    'humble',
    'Passionate',
  ];
  let complimentIndex = Math.floor(Math.random() * compliments.length);
  let compliment = compliments[complimentIndex];
  return console.log(`You are ${compliment}, Amjad!`);
}
giveCompliment('Amjad');
giveCompliment('Amjad');
giveCompliment('Amjad');
