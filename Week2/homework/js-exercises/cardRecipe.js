'use strict';
let myRecipe = {
  title: 'rice with beans',
  servings: 2,
  ingredients: ['1 cup of rice', '200gr of meat', ' 200gr of beans'],
};

for (let prop in myRecipe) {
  console.log(prop + ':', myRecipe[prop]);
}
