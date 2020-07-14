'use strict';
const arr1 = [
  'Hi',
  1985,
  false,
  { firstName: 'Amjad', secondName: 'Habbabeh' },
];
const arr2 = [
  2020,
  true,
  false,
  { age: 35, nationality: 'Syrian' },
  'Alkmar',
  ['horse', 'cats'],
  'music',
];
console.log('the length of first array is: ' + arr1.length) +
  console.log('the length of second array is: ' + arr2.length);
if (arr1.length === arr2.length) {
  console.log('They are the same');
} else {
  console.log('Two different sizes');
}
