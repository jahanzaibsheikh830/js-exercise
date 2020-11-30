// 1. Write a program using javascript prompt to read 10 numbers and find their sum and average

// var input1 = +prompt("Enter 1st Value");
// var input2 = +prompt("Enter 2nd Value");
// var input3 = +prompt("Enter 3rd Value");
// var input4 = +prompt("Enter 4th Value");
// var input5 = +prompt("Enter 3rd Value");

// var sum =  input1+input2+input3+input4+input5;
// var average = sum / 5;

// document.write("The sum of is " + sum  + "and average is" + average )

// 2.Write a program using javascript prompt to display the multiplication table of a given integer.Test Data:
//  Input the number(Table to be calculated)
//  : 15 Expected Output: 15 X 1 = 15 ... ... 15 X 10 = 150

// var num = +prompt("Enter a number");

// for (var i = 1; i <= 10; i++) {
//     document.write(num + "x" + i + "=" + num * i + "<br>");
// }

// 3. Write a program using javascript prompt input 10 numbers and display even and odd number separately.
// Test Data : Input the number-1 : 2 Input the number-2 : 11 ... Input the number-10 : 7

// var input1 = +prompt("Enter 1st Value");
// var input2 = +prompt("Enter 2nd Value");
// var input3 = +prompt("Enter 3rd Value");
// var input4 = +prompt("Enter 4th Value");
// var input5 = +prompt("Enter 5th Value");
// var input6 = +prompt("Enter 6th Value");

// var arr = [];
// var even = []
// var odd = []
// arr.push(input1);
// arr.push(input2);
// arr.push(input3);
// arr.push(input4);
// arr.push(input5);
// arr.push(input6)

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0){
//         even.push(arr[i]);
//         document.getElementById('even').innerHTML = even;
//     }
//     else{
//         odd.push(arr[i])
//         document.getElementById('odd').innerHTML = odd;

//     }
// }
// 4. Write a loop program to display the pattern like right angle triangle using an asterisk.

// var rows = +prompt("Enter Number of Rows")

// for(var i=1; i <=rows; i++)
// {
//  for(var j=1; j<=i; j++)
//     document.write("*");
//     document.write("<br>")
// }
// 5. Write a loop program to display the pattern like right angle triangle with a number.

// var rows = +prompt("Enter Number of Rows")

// for(var i=1; i <=rows; i++)
// {
//  for(var j=1; j<=i; j++)
//     document.write(j);
//     document.write("<br>")
// }


// 6.Write a loop program to make such a pattern like right angle triangle with a number which will repeat a number in a row.

// var rows = +prompt("Enter Number of Rows")

// for(var i=1; i <=rows; i++)
// {
//  for(var j=1; j<=i; j++)
//     document.write(i);
//     document.write("<br>")
// }

// 7.Write a javascript program to calculate the factorial of a given number.

// var number = +prompt('Enter a positive integer:');

// if (number < 0) {
//     console.log('Error! Factorial for negative number does not exist.');
// }
// else if (number === 0) {
//     document.write("The factorial of" + number + "is"+ 1);
// }
// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     document.write("The factorial of" + number + "is"+ fact);
// }

// 8.Write a javascript loop program to find the prime numbers within a range of numbers. Test Data : Input starting number of range: 1 Input ending number of range : 50 Expected Output : The prime number between 1 and 50 are : 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47

// var lowerNumber = parseInt(prompt('Enter lower number: '));
// var higherNumber = parseInt(prompt('Enter higher number: '));

// console.log("The prime numbers between" + lowerNumber + "and" + higherNumber + "are:");

// // looping from lowerNumber to higherNumber
// for (let i = lowerNumber; i <= higherNumber; i++) {
//     let flag = 0;

//     // looping through 2 to user input number
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             flag = 1;
//             break;
//         }
//     }
//     // if number greater than 1 and not divisible by other numbers
//     if (i > 1 && flag == 0) {
//         document.write(i);
//     }
// }

// 9. Write a javascript loop program to display the number in reverse order. Test Data : Input a number: 12345 Expected Output : The number in reverse order is : 54321
           
// var  number = prompt("Enter a number")          
// var reverse=0;
// while(number!=0)      
// {      
//  reverse = (reverse*10)+(number%10)        
//  number = parseInt(number/10)
// }      
// document.write("Reversed Number: "+reverse);       
  









