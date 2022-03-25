// # Javascript Control Structures
var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8,8, 1, 1];

// ## Display in browser console
// 1.  display in the console the numbers from 1 to 20

for (i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] < 21) {
      console.log(array[i]);
    }
  }

//   2.  display in the console the odd numbers from 1 to 20

for (i = 0; i < array.length; i++) {
    if (array[i] < 20 && array[i] % 2 != 0) {
      console.log(array[i]);
    }
  }

// 3.  compute the sum of the elements of an array and display it in the console

var sumArr = 0;

for(i = 0; i < array.length; i++){
    sumArr = sumArr + array[i];
}

console.log(sumArr);

// 4.  compute the maximum of the elements of an array and display it in the console

var maxNr = array[0];

for (i = 0; i < array.length; i++) {
  if (array[i] > maxNr) {
    maxNr = array[i];
  }
}
console.log(maxNr);

//5.  compute how many times a certain element appears in an array - tips: use object, var element = 2


result = { };
for(var i = 0; i < array.length; ++i) {
    if(!result[array[i]])
        result[array[i]] = 0;
    ++result[array[i]];
}
console.log(result);

// 6.  Using nested control structures (doua for + if) for generate the following pattern
           
0 1 0 1

1 0 1 0

0 1 0 1

1 0 1 0

function pattern(a, b) {
    var arr = [];
    for (i = 0; i < a; i++) {
      for (j = 0; j < b; j++) {
        arr[i] = [];
      }
    }
  
    for (i = 0; i < a; i++) {
      for (j = 0; j < b; j++) {
        if (i % 2 == 0 && j % 2 == 0) {
          arr[i][j] = 0;
        } else if (i % 2 == 0 || j % 2 == 0) {
          arr[i][j] = 1;
        } else {
          arr[i][j] = 0;
        }
      }
    }
    return arr;
  }
  console.log(pattern(8,8));

// ---------------------------------------------------------------------------------------
//  Edabit homework (Optional)
// Create a function that takes two numbers as arguments and returns their sum.

function sum(a, b){
    return a + b;
}
console.log(sum(55, 80));

// Write a function that takes an integer minutes and converts it to seconds.

function conv(a){
    return a * 60;
}
console.log(conv(80));

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function addNext(a){
    return a + 1;
}
console.log(addNext(50));

// Create a function that takes an array containing only numbers and return the first element.

var numbers = [20, 65, 44, 88, 63544];

function firstNum(){
    return numbers[0];
}

console.log(firstNum());

// Return the Remainder from Two Numbers.

function remainder(a, b){
    return a % b;
}

console.log(remainder(3, 4));

// The Farm Problem

function howManyLegs(chickens, cows, pigs){
    chickensLegs = chickens * 2;
    cowsLegs = cows * 4;
    pigsLegs = pigs *4;

    totalLegs = chickensLegs + cowsLegs + pigsLegs;

    return totalLegs;
}

console.log(howManyLegs(2, 3, 5));

// Check if an Integer is Divisible By Five

function divByFive(a){
    if(a % 5 === 0){
        return true;
    } else {
    return false;
    }
}

console.log(divByFive(5));
console.log(divByFive(37));

// Compare Strings by Count of Characters 
//not OK , REVIN

function countAndcompareStrings(a, b){
    if(a.lenght === b.lenght){
        return true;
    } else {
        return false;
    }
}

console.log(countAndcompareStrings("AA", "BB"));
console.log(countAndcompareStrings("AA", "BBC"));

// Say "Hello" Say "Bye"

function helloBye(name, num){
    if(num === 1){
        return "Hello " + name;
    } else {
        return "Bye " + name;
    }

}

console.log(helloBye("alon", 1));
console.log(helloBye("alon", 0));