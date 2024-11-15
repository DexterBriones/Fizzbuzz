/*Loop through numbers from 1 to 100.
Print "Fizz" for numbers divisible by 3.
Print "Buzz" for numbers divisible by 5.
Print "FizzBuzz" for numbers divisible by both 3 and 5.
Print the number itself if it's not divisible by either
*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }