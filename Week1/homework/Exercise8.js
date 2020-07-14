'use strict';
let a = 'Amjad',
  b = 'Musician',
  x = { age: 35, nationality: 'Syrian' },
  y = { dob: '19/june/1985', currentCity: 'Alkmar' };
if (typeof a === typeof b) {
  console.log('SAME TYPE');
} else {
  console.log('Not the same');
}
if (typeof a === typeof x) {
  console.log('SAME TYPE');
} else {
  console.log('Not the same');
}
if (typeof a === typeof y) {
  console.log('SAME TYPE');
} else {
  console.log('Not the same');
}
if (typeof x === typeof b) {
  console.log('SAME TYPE');
} else {
  console.log('Not the same');
}
if (typeof x === typeof y) {
  console.log('SAME TYPE');
} else {
  console.log('Not the same');
}
if (typeof y === typeof b) {
  console.log('SAME TYPE');
} else {
  console.log('Not the same');
}
console.log(typeof a);
console.log(typeof x);

function checkTypeof(a, x) {
  if (typeof a === typeof x) {
    console.log('SAME TYPE');
  } else {
    console.log('Not the same');
  }
}

checkTypeof(a, b);
checkTypeof(a, x);
checkTypeof(a, y);
checkTypeof(b, x);
checkTypeof(b, y);
checkTypeof(x, y);
