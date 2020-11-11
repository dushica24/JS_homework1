//1. Декларирај променливи од сите примитивни типови.

let name = 'Dushica';
let measurment = 15
let isChecked = true; 
let something ; 
let empty = null; 

//2. Испечати ги соодветно вредностите и типовите на променливите.

console.log(name + " is type of " + typeof(name));
console.log(measurment + " is type of " + typeof(measurment));
console.log(isChecked + " is type of " + typeof(isChecked));
console.log(something + " is type of " + typeof(something));
console.log(empty + " is type of " + typeof(empty));

//3. Промени ја вредноста на некоја од променливите.

isChecked = false ;

console.log(isChecked); 

//4. Креирај константа и обиди се да и доделиш нова вредност. Што се случува?

/*const year = 2020; 
year = 2021; // Error: assingnment to const. */

//5. Декларdирај променливи и употреби ги аритметичките оператори 

let number1 = 2;
let number2 = 4;

console.log(number1 + number2);
console.log(number2 - number1);
console.log(number2 / number1);
console.log(number1 * number2);
console.log(number1 % number2);

number1++;
console.log(number1++);
number2--; 
console.log(number2--);

//6. Декларирај променливи и употреби ги операторите за споредба

console.log(number1 == number2); 
console.log(number1 === number2); 
console.log(number1 != number2); 
console.log(number1 !== number2); 
console.log(number1 > number2); 
console.log(number1 >= number2); 
console.log(number1 < number2); 
console.log(number1 <= number2); 

//7. Декларирај променливи и употреби ги логичките оператори

console.log(number2 < number1 && number2 <= 3);
console.log(number2 < number1 || number2 < 0);
console.log(!(number2 < number1 || number2 < 0));


