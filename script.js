//Strict mode
'use strict';
// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log(`I can drive :D`);
// // const interface = `Auto`;

// function logger() {
//   //function body
//   console.log(`My name is Kana`);
// }
// // calling, running, invoking function
// logger();
// logger();
// logger();
//simple function without any parameters or return not need be in Valuable.
//logger doesn't return any and produce any Values. It just print.

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// // if you want to use Values that was return, you need to store it in a Valuable
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//function declaration
// function calcAge1(birthYear){
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1997);


// //function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }

// const age2 = calcAge2(1997);
// console.log(age1, age2);


const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

//one parameter and more than one lines of code => we need to return statement.
//if the function has multiple parameters, they should be wrapped by parentheses

console.log(yearsUntilRetirement(1997, `Kana`));
console.log(yearsUntilRetirement(1980, `Bob`));

