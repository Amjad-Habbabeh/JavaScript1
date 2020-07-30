'use strict';
function validateCreditNumber(input) {
  if (isNaN(input)) {//check the input if its a number 
    console.log(`'Invalid! The ${input} should contain only numbers!'`);
  } else {
    let inputArr = [];
    inputArr.push(input.toString().split(''));
    inputArr = inputArr[0].map((x) => parseInt(x));
    // console.log(inputArr);

    function checkSameNum() {//callback function to check if the whole index are the same
      for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[0] != inputArr[i]) return false;
      }
      return true;
    }

    if (inputArr.length === 16) {//check if the inputs are only 16 digits of numbers
      let sum = inputArr.reduce(function (a, b) {
        return a + b;
      }, 0);
      if (sum <= 16) {//check if the sum of the inputs numbers are less or more than 16
        console.log(`'Invalid! The sum of the ${input} is wrong!'`);
      } else if (checkSameNum()) {//the sum more than 16 so check if the callback function return true or false.
        console.log(
          `'Invalid! The ${input} should contain at least 2 different types of numbers!'`
        );
      } else if (inputArr[inputArr.length - 1] % 2 !== 0) {//the callback function return false so check the last digit if its even
        console.log('invalid! odd number at last');
      } else {//all the conditions met
        console.log(`"Success! The ${input} is a valid credit card number!`);
      }


      //if the inputs not 16 digits of number
    } else {
      console.log(`'Invalid! it must be 16  characters only!`);
    }
  }
}

validateCreditNumber('a92332119c011112'); // Returns "Invalid! The input a92332119c011112 should contain only numbers!
validateCreditNumber('4444444444444444'); // Returns "Invalid! The input 4444444444444444 should contain at least 2 different types of numbers!
validateCreditNumber('6666666666661666'); // Returns "Success! The input 6666666666661666 is a valid credit card number!
