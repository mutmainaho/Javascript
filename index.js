//write a function to reverse a string
//    const reverseStr = str => {
//      let reverseStr = "";
//    for(let i = str.length -1; i >= 0; i--){
//         reverseStr += str[i]
//     }
//      return  reverseStr;
//    }
//    const name = "Mutmainah";
//    console.log(reverseStr(name))

// var price = 15;
// var money = 20;
// if(money >= price){
//     console.log('buy hammer')
// }else{
//     console.log('dont have enough money')
// }

// let a = 1;
// let b = 2;
// if (a>=b){
//     console.log('a is greater than b')
// }else{
//     console.log('a is less than or equal to b')
// }

// const evenNumber = even => {

//     if (10%4 === number) {
//         return even;

//       } else {
//         return odd;
//     }

// }
// const number = 2
// console.log(evenNumber(number))

// for(i=10; i<=20; i++){

//     if(i % 2 == 0){
//       console.log(i);
//     }
//   }

//   let num = 99;

// while (num >= 1) {
//     // check value of num
//     if(num===1){
//       console.log( num + "bottle of juice on the wall!"+ num +"bottle of juice! Take one down, pass it around..." + (num -1) +  "bottles of juice on the wall!" )
//     }
//   else if (num === 2) {
//   console.log(num + "bottle of juice on the wall!"+ num +"bottle of juice! Take one down, pass it around..." + (num -1) +  "bottles of juice on the wall!" )
//   }
// else {
//   console.log(num + "bottle of juice on the wall!"+ num +"bottle of juice! Take one down, pass it around..." + (num -1) +  "bottles of juice on the wall!" )
//   };

// print lyrics using num
// don't forget to check pluralization on the last line!
// decrement num
// num = num - 1;
// }
// for (let x = 0; x < 5; x = x + 1) {
//     for (let y = 0; y < 3; y = y + 1) {
//       console.log(x + "," + y);
//     }
//   }

//   for (let i = 0; i <= 6; i = i + 2) {
//     console.log(i);
//   }

//   let x = 1;

// while(x<=20){
//     if(x % 3 === 0  && x % 5 === 0){
//         console.log("FizzBuzz")
//     }
//     else if (x % 3 === 0){
//         console.log("Fizz")
//     }
//     else if (x % 5 === 0){
//         console.log("Buzz")
//     }
//     else{
//         console.log(x)
//     }
//     x = x + 1
// }

// let x = 9;
// while (x >= 1) {
//   console.log("hello " + x);
//   x = x - 1;
// }

function reverseStr(str) {
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}
console.log(reverseStr('mainah'));

function add(x, y) {
  const sum = x + y;
  return sum;
}
console.log(add(5, 8));

// function laugh(){
//     const p = "hahaaahaaaaaa";
//     return p;
// }
// console.log(laugh())

// let str ="";
// function laugh(num){
//     for (let i=0; i<num; i++){
//         str = str + "ha"
//     }
//     str = str + "!"
//     return str;
// }
// console.log(laugh(6))
let sound = '';
function laugh(num) {
  for (var x = 0; x < num; x++) {
    sound = sound + 'ha';
  }
  sound = sound + '!';
  return sound;
}
console.log(laugh(8));

function square(x) {
  return x * x;
}

function subtractFour(x) {
  return square(x) - 4;
}

console.log(subtractFour(5));

// returns the sum of two numbers
function add(x, y) {
  return x + y;
}

function divideByTwo(num) {
  return num / 2;
}

const sum = add(5, 7);
const average = divideByTwo(sum);
console.log(sum);

function addTen(x) {
  return x + 10;
}

function divideByThree(y) {
  return y / 3;
}

const result = addTen(2);
console.log(divideByThree(result));

//   const x = 10;
//   if (x < 6) {
//     const double = x * 2;
//     console.log(double);
//   } else {
//     const half = x / 2;
//     console.log(half);
//   }

//   for (let i = 0; i < 5; i++) {
//     let triple = x * 3;
//     console.log(triple);
//   }

//   let fruit = "apple";

// if (fruit !== "banana") {
//     let fruit = "banana";
//     console.log(fruit);
// }
// console.log(fruit);

// function getClothing(isCold) {
//     if (isCold) {
//       var freezing = 'Grab a jacket!';
//     } else {
//       var hot = 'It’s a shorts kind of day.';
//       console.log(freezing);
//     }
//   }

//   getClothing(false)

//   function getClothing(isCold) {
//     if (isCold) {
//       const freezing = 'Grab a jacket!';
//     } else {
//       const hot = 'It’s a shorts kind of day.';
//       console.log(freezing);
//     }
//   }

//   getClothing(false)

//   let x = 1;

//   function addTwo() {
//      let x = x + 2;
//   }

//   addTwo();
//   x = x + 1;
//   console.log(x);

const alphaCheck = (str) => {
  let vowelCount = 0;
  let consonantCount = 0;
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i++) {}
};

let arr = [4, 12, 76, 9, 1];
let largest = arr[0];
for (let i = 0; i <= largest; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
  }
}
console.log(largest);

// let num = [];
// const numbers = sort => {
//   for (let i=0; i<sort.length; i++){
//    num.sort(sort[i])
//   }
//   return sort;
// }
// console.log(numbers[3,2,53,5,2,6,8])

const num = [3, 2, 53, 5, 2, 6, 8];

num.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(num);

let even = [8];
function isEven(n) {
  return n % 2 == 0;
}

function isOdd(n) {
  return Math.abs(n % 2) == 1;
}
console.log(isEven(even));

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
//   const array = sort => {
//     for (let i=0; i<fruits.length; i++){
//       if(fruits.indexOf("Mango") !== -1){
//         return "value exist";
//       }else{
//         return "value does not exist"
//       }
//     }
//   }
//   console.log(array(fruits))

const alphCheck = (str) => {
  let vowelCount = 0;
  let consCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === 'a' ||
      str[i] === 'e' ||
      str[i] === 'i' ||
      str[i] === 'o' ||
      str[i] === 'u'
    ) {
      vowelCount++;
    } else {
      consCount++;
    }
  }
  return [vowelCount, consCount];
};
console.log(alphCheck('mutmainah'));

// const cat = {
//   age: 2,
//   name: 'Bailey',
//   meow: function () {
//     console.log('Meow!');
//   },
//   greet: function (name) {
//     console.log(`Hello ${name}`);
//   }
// };

const chameleon = {
  color: 'pink',

  changeColor: function () {
    if (this.color === 'green') {
      this.color = 'pink';
    } else {
      this.color = 'green';
    }
  },
};
console.log(chameleon.color);
console.log(chameleon.changeColor());

const names = ['David', 'Richard', 'Veronika'];

const nameLengths = names.map(function (name) {
  return name.length;
});
console.log(nameLengths);

function Longboard() {
  this.material = 'bamboo';
}

const board = new Longboard();
console.log(board.constructor);

const rodent = {
  favoriteFood: 'cheese',
  hasTail: true,
};

console.log(rodent.constructor);

const bear = {
  claws: true,
  diet: 'carnivore',
};

function PolarBear() {}
PolarBear.prototype = bear;

const snowBall = new PolarBear();
(snowBall.color = 'white'), (snowBall.favoriteDrink = 'cola');

console.log(snowBall.claws);
console.log(snowBall.color);
console.log(snowBall.__proto__);

function Car(color, year) {
  this.color = color;
  this.year = year;
}

Car.prototype.drive = function () {
  console.log('Vroom vroom!');
};

const car = new Car('silver', 1988);
console.log(car.color);
console.log(car.drive());

var attempt = 30;
while (attempt > 10) {
  console.log('priting');
  attempt--;
  break;
}
console.log(attempt);

function Item(name, amountInStock, price) {
  this.name = name;
  this.amountInStock = amountInStock;
  this.price = price;
  this.purchase = function () {
    this.amountInStock = this.amountInStock - 1;
  };
}
let biscuit = new Item('biscuit', 100, 1.99);

for (let i = 0; i < 10; i++) {
  biscuit.purchase();
}
console.log(biscuit.amountInStock);

function Train() {
  this.sound = 'cho cho';
}

let Magnum = new Train();
let Sonic = new Train();

Train.prototype = {
  speed: 350,
};
function increamentSpeed(train) {
  return train.speed + 50;
}
console.log(increamentSpeed(Magnum));

class Tree {
  constructor(leaves = 5, size) {
    this.leaves = leaves;
    this.size = size;
  }
}
class Maple extends Tree {
  constructor(leafColor, leaves, size) {
    super(leaves, size);
    this.leafColor = leafColor;
  }
}
// let sage = new Maple ('yellow',undefined,10)

// console.log(sage)

var donut = [
  { type: 'cinder', cost: 1.89 },
  { type: 'pink', cost: 2.89 },
  { type: 'chocolate', cost: 3.89 },
];
donut.forEach(function (elem) {
  return elem.type;
});

console.log(typeof 42.2);

// Jonas Course

/* 
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK � 

*/

let markHeight = 1.69;
let johnHeight = 1.95;

let markMass = 78;
let jonhMass = 92;

const markBMI = markMass / (markHeight * markHeight);
console.log(markBMI);
const johnBMI = jonhMass / (johnHeight * johnHeight);
console.log(johnBMI);
const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

//templete literals can assemble muliple pieces into one final piece also use to create multi line strings
const firstName = 'Mutmainah';
const job = 'software developer';
const birthYear = 1998;
const year = 2022;
const mainah = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(mainah);

/* 
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
*/

// if(markBMI>johnBMI){
//   console.log("Mark's BMI is higher than John's!")
// }else {
//   console.log ("John's BMI is higher than Mark's!")
// }

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's!`);
}

//type coersion convert values from one data type to another
console.log('23' + '2' + '8');
console.log('10' - '4' - '2');
console.log('10' / '4' / '2');
console.log('10' * '4' * '2');
let n = '1' + 1;
n = n - 1;
console.log(n);

// 5 falsy values : 0,'',undefined,null,NaN

/* 
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK �
*/

// scoreDolphins = (96 + 108 + 89) / 3;
// scoreKoalas = (88 + 91 + 110) / 3;
//  console.log(scoreDolphins,scoreKoalas)

//  if(scoreDolphins >= scoreKoalas){
//   console.log('Dolphin teams won the competition');
//  }
//  else if(scoreKoalas >= scoreDolphins){
//   console.log('Koalas team won the competition');
//  }
//  else{
//   console.log('Both team has a draw')
//  }

//  if(scoreDolphins >= scoreKoalas && scoreDolphins >= 100){
//    console.log (' Team D won the competition');
//  } else if(scoreKoalas >= scoreDolphins && scoreKoalas >= 100){
//   console.log ('Team  won the competition')
//  }
//  else if(100 >= scoreDolphins && 100 >= scoreKoalas){
//   console.log (' No Team won the competition');
//  } else{
//   console.log ('Both Team has a draw')
//  }

/* 
 Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
GOOD LUCK �
 */

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}`);

// functions is a piece of code that can be reuseable and can hold one or more complete lines of code.
// logger() means calling/ running/invoking function
// parameters are variable specified to the function
function logger() {
  console.log('my name is mainah');
}
logger();
// function declaration
function calcAge(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge(1991);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);

/*
Diffrences btw function declearation and function expression
 function declareration can be called in the code before defining it
 */
// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const getAJob = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const firm = 'Bloomberg';
  return `${firstName} got into ${firm} at ${age} years old 😎`;
};
console.log(getAJob(1998, 'Mutmainah'));

/* 
 Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
GOOD LUCK �
 
 */

// const calcAverage = (a,b,c) => (a+b+c)/3;

// let scoreDolphin = calcAverage(44,23,71);
// let scoreKoala = calcAverage (65,54,49);
// console.log(scoreDolphin,scoreKoala)

// const checkWinner = function (avgDolphins,avgKoalas) {
//   if(avgDolphins >= 2 * avgKoalas){
//     console.log(`Dolphin wins (${avgDolphins}) vs.(${avgKoalas})`)
//   } else if(avgKoalas >= 2 * avgDolphins){
//     console.log(`Kolas wins (${avgKoalas}) vs. (${avgDolphins})`)
//   }else{
//     console.log(`No team won.....`)
//   }
// }

// checkWinner(scoreDolphin,scoreKoala);
// checkWinner(576,111);

//  scoreDolphin = calcAverage(85,54,41);
//  scoreKoala = calcAverage(23,34,37);
//  console.log(scoreDolphin,scoreKoala);
//  checkWinner(scoreDolphin,scoreKoala);

/* 
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) �
GOOD LUCK �
*/

// const calcTip = function (bill){
//   return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125,555,44]
// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
// console.log(bills)
// console.log(tips)
// const total = [bills[0]+ tips[0],bills[1]+ tips[1],bills[2]+ tips[2]]
// console.log(total)

//object
// object arebused for unstructured data while an array is used for structured data
const jonas = {
  firstName: 'mainah',
  lastName: 'odunewu',
  age: 2022 - 1998,
  job: 'develover',
};

console.log(jonas.firstName);
console.log(jonas['job']);

//object method

const mutmainah = {
  firstName: 'mainah',
  lastName: 'odunewu',
  job: 'develover',
  birthYear: 1991,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};

console.log(`jonas is a ${mutmainah.calcAge()}-years old ${mutmainah.job}.`);
/* 
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK �
*/

const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,

  calBMI: function () {
    this.markBMI = this.mass / (this.height * this.height);
    return this.markBMI;
  },
};

const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,

  calBMI: function () {
    this.johnBMI = this.mass / (this.height * this.height);
    return this.johnBMI;
  },
};

mark.calBMI();
john.calBMI();
console.log(mark.markBMI, john.johnBMI);

if (mark.markBMI > john.johnBMI) {
  console.log(` ${mark.firstName} ${
    mark.lastName
  }'s BMI (${mark.calBMI()}) is higher than 
  ${john.firstName} ${john.lastName}'s BMI (${john.calBMI()}) !`);
} else if (john.johnBMI > mark.markBMI) {
  console.log(` ${john.firstName} ${
    john.lastName
  }'s BMI (${john.calBMI()}) is higher than 
  ${mark.firstName} ${mark.lastName}'s BMI (${mark.calBMI()}) !`);
}

//Loops

const yearss = [1991, 2007, 1968, 2000];
const ages = [];

for (let i = 0; i < yearss.length; i++) {
  ages.push(2037 - yearss[i]);
}
console.log(ages);

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end..');
}

/*
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK �
*/

const calcTip = function (bill) {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 8, 6]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
