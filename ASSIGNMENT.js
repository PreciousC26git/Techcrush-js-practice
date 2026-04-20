const numbers = [2,4,6,8,10];

numbers.forEach(function(num){
    console.log(num * 2)
});

//question 2
const names = ["Esther", "John", "Ada", "Mike"];

names.forEach(function(name){
    console.log('Hello $ {name}!');
})

//QUESTION 3
const number = [1, 2, 3, 4, 5];

const squared =
numbers.map(function(num){
    return num * num;
});

console.log(squared);

//QUESTION 4
const prices = [100, 200, 300];

const discounted =
prices.map(function(prices){
    return prices * 0.9;
})

console.log(discounted);

//QUESTION 5
const Numbers = [5, 12, 8, 20, 3];

const greatherthanTen =
Numbers.filter(function(num){
    return num >10;
});

//QUESTION 6
const ages = [15, 22, 17, 30, 18]

const adults =
ages.filter(function(age){
    return age >= 18;
});

console.log(adults);