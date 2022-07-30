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

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// //Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1997);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// }

// //one parameter and more than one lines of code => we need to return statement.
// //if the function has multiple parameters, they should be wrapped by parentheses

// console.log(yearsUntilRetirement(1997, `Kana`));
// console.log(yearsUntilRetirement(1980, `Bob`));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces =  cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAge = function(year) {
//   return 2037 - year;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if(retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🚀`);
//     return -1;
//   }
// }

// console.log(yearsUntilRetirement(1950, `Mike`));
// console.log(yearsUntilRetirement(1997, `Kana`));

//coding challenge #1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// // data1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas *2) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins *2) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`No team wins...`);
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(555,111);

// // data2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);

//Array
// const friend1 = `Michael`;
// const friend2 = `Steven`;
// const friend3 = `Peter`;

// const friends = [`Michael`, `Steven`, `Peter`];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length); //3
// console.log(friends[friends.length - 1]); //[2] => Peter

// friends[2] = `Jay`;
// console.log(friends);

// const firstName = `Kana`;
// const kana = [firstName, `Karimata`, 2037-1997, `Programmer`, friends];
// console.log(kana);
// console.log(kana.length);

// const calcAge = function (birthYear){
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length -1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])]
// console.log(ages);


//add elements
// const friends = [`Michael`, `Steven`, `Peter`];
// const newLength = friends.push(`Jay`);
// console.log(friends);
// console.log(newLength);

// friends.unshift(`John`);
// console.log(friends);

// //remove elements
// friends.pop();//last
// const popped = friends.pop();//last (peter)
// console.log(popped);
// console.log(friends);

// friends.shift();//first
// console.log(friends);

// console.log(friends.indexOf(`Steven`));

// console.log(friends.includes(`Steven`));
// console.log(friends.includes(`Bob`));

// if (friends.includes(`Steven`)) {
//   console.log(`You have a friend called Steven`);
// }

//coding challenge #2

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
//   // if (bill >=50 && bill <= 300) {
//   //   const tip = bill *0.15
//   //   return tip;
//   // } else {
//   //   const tip = bill *0.2
//   //   return tip;
//   // }
// }
// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[2]), calcTip(bills[bills.length - 1])];
// console.log(tips);
// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[tips.length - 1] + bills[bills.length -1]];
// console.log(total);

// const jonasArray = [
//   `Jonas`,
//   `Karimata`,
//   2037 - 1997,
//   `programmer`,
//   [`Michael`, `Peter`, `Steven`]
// ];
// //object
// const this = {
//   firstName: `Jonas`,
//   lastName: `Kana`,
//   age: 2037 - 1997,
//   job: `teacher`,
//   friends: [`Michael`, `Peter`, `Steven`]
// };
// //keys: values
// //keys are properties
// //this object has 5 properties

// const this = {
//   firstName: `Jonas`,
//   lastName: `Kana`,
//   age: 2037 - 1997,
//   job: `teacher`,
//   friends: [`Michael`, `Peter`, `Steven`]
// };

// console.log(this);
// console.log(this.lastName);
// console.log(this[`lastName`]);

// const nameKey = `Name`;
// console.log(this[`first` + nameKey]);
// console.log(this[`last` + nameKey]);

// // console.log(this)

// const interestedIn = prompt(`What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends`);

// if(this[interestedIn]){
//   console.log(this[interestedIn]);
// } else {
//   console.log(`Wrong request! Choose between firstName, lastName, age, job and friends`);
// }

// this.location = `Portugal`;
// this[`twitter`] = `@jonaskarimata`;
// console.log(this);

// //challenge
// console.log(`${this.firstName} has ${this.friends.length} friends, and his best friend is called ${this.friends[0]}`);

// const jonas = {
//   firstName: `Jonas`,
//   lastName: `Kana`,
//   birthYear: 1991,
//   job: `teacher`,
//   friends: [`Michael`, `Peter`, `Steven`],
//   hasDriverLicense: false,
//   calcAge: function() {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function() {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? `a` : `no`} driver's license.`
//   }
// };
// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// //challenge
// //`Jonas is a 46-year old teacher and he has a/no driver's license`
// console.log(jonas.getSummary());

//coding challenge
// const mark = {
//   fullName: `Mark Miller`,
//   mass: `78`,
//   height: `1.68`,
//   calcBMI: function() {
//      this.bmi = this.mass / this.height **2
//      return this.bmi
//   }
// };

// const john = {
//   fullName: `John Smith`,
//   mass: `92`,
//   height: `1.95`,
//   calcBMI: function() {
//     this.bmi = this.mass / this.height **2
//     return this.bmi
//  }
// };

// const result = function() {
//   if (mark.calcBMI() > john.calcBMI()) {
//     console.log(`Mark's BMI(${mark.calcBMI()}) is higher than John's (${john.calcBMI()})`);
//   } else {
//     console.log(`John' BMI(${john.calcBMI()}) is higher than Mark's (${mark.calcBMI()})`);
//   }
// }

// result();

//Loop
// console.log(`Lifting weights repetition 1 🚀`);
// console.log(`Lifting weights repetition 2 🚀`);
// console.log(`Lifting weights repetition 3 🚀`);
// console.log(`Lifting weights repetition 4 🚀`);
// console.log(`Lifting weights repetition 5 🚀`);
// console.log(`Lifting weights repetition 6 🚀`);
// console.log(`Lifting weights repetition 7 🚀`);
// console.log(`Lifting weights repetition 8 🚀`);
// console.log(`Lifting weights repetition 9 🚀`);
// console.log(`Lifting weights repetition 10 🚀`);

// for(let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🚀`);
// }


// const jonas = [
//   `Jonas`,
//   `Kana`,
//   2037 - 1991,
//   `teacher`,
//   [`Michael`, `Peter`, `Steven`],
//   true
// ];
// const types = [];
// //create new Array in a Loop
// for(let i = 0; i < jonas.length; i++) {
//   //Reading from jonas array
//   console.log(jonas[i], typeof jonas[i]);
//   //filling types array
//   types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// //loop
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i])
// }

// console.log(ages);

// //continue and break
// console.log(`---- ONLY STRINGS ---`)
// for (let i = 0; i < years.length; i++) {
//   if(typeof jonas[i] !== `string`) continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log(`---- BREAK WITH NUMBER---`)
// for (let i = 0; i < years.length; i++) {
//   if(typeof jonas[i] === `number`) break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// const jonas = [
//   `Jonas`,
//   `Kana`,
//   2037 - 1991,
//   `teacher`,
//   [`Michael`, `Peter`, `Steven`],
//   true
// ];

// for(let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// };

// for(let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------------------starting exercise ${exercise}`);

  // for (let rep = 1; rep < 3; rep++){
  //   console.log(`Lifting weight repetition ${rep} 🚀`);
  // }

// let rep = 1;
//  while (rep <= 10) {
//   console.log(`WHILE: Lifting weight repetition ${rep} 🚀`);
//   rep++;
//  }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while(dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`Loop is about to end...`);
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

for(let i = 0; i < bills.length; i++){
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

// console.log(calcTip(100));

// const tips = [calcTip(bills[0]), calcTip(bills[2]), calcTip(bills[bills.length - 1])];
// console.log(tips);
// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[tips.length - 1] + bills[bills.length -1]];
// console.log(total);