//Strict mode
'use strict';
// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log(`I can drive :D`);
// // const interface = `Auto`;

function logger() {
  //function body
  console.log(`My name is Kana`);
}
// calling, running, invoking function
logger();
logger();
logger();
//simple function without any parameters or return not need be in Valuable.
//logger doesn't return any and produce any Values. It just print.

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// if you want to use Values that was return, you need to store it in a Valuable
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);