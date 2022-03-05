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