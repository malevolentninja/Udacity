# Lesson Four: Loops

### 2. While Loops

var x = 1;
while(x <= 10000){
    console.log(x + " mississippi");
    x = x + 1;
}

### 3. Parts of a while Loop

basic while loop:
```sh
var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}
```
#### Question 1: How many times will the while loop run?
```
var x = 10;
while (x <= 25) {
  console.log('Printing out x = ' + x);
  x = x + 2;
}
```
Answer: This loop prints out 8 times. 
After 24 is printed out, x is incremented by 2, so the value of x is 26, which is over the 25 limit.

#### Question 2: Here's a while loop that is supposed to print out the values of x from 0 to 5, but there's a bug. What is missing?

```sh
while (x < 6) {
  console.log('Printing out x = ' + x);
}
```
 Answer: 
x never increments and x is never assigned a start value. 
Therefore the while loop fails to execute.

### 4. Quiz: JuliaJames (4-1)
Fizzbuzz version JuliaJames
- for an interview want the code to be efficient
Directions: 
Write a while loop that:
- Loop through the numbers 1 to 20
- If the number is divisible by 3, print "Julia"
- If the number is divisible by 5, print "James"
- If the number is divisible by 3 and 5, print "JuliaJames"
- If the number is not divisible by 3 or 5, print the number

```sh

var x = 1;

while (x <=20) {
    if (x%3 === 0 && x%5 === 0) {
        console.log("JuliaJames");
    }
    else if (x%5 === 0) {
        console.log("James");
    }
    else if (x%3 === 0){
        console.log("Julia");
    }
    else {
        console.log(x);
    }
    x=x+1;
    }
```


### 5. Quiz: 99 Bottles of Juice(4-2)



Directions:
Write a loop that prints out the following song. Starting at 99, and ending at 1 bottle.
```sh
 var num = 99;

while (num >=0) {
       if  (num > 2) {
           sub=num - 1;
           console.log(num +" bottles of juice on the wall! " + num+ " bottles of juice! Take one down, pass it around... "+ sub + " bottles of juice on the wall!");
       }
        else if (num == 2){
            sub=num - 1;
           console.log(num +" bottles of juice on the wall! " + num+ " bottles of juice! Take one down, pass it around... "+ sub + " bottle of juice on the wall!");
        }
        else if (num === 1) {
            sub=num - 1;
           console.log(num +" bottle of juice on the wall! " + num+ " bottle of juice! Take one down, pass it around... "+ sub + " bottles of juice on the wall!");
        }
           num = num - 1;
    }
```


### 6. Quiz: Countdown, Liftoff(4-3)

Write a while loop that counts down from 60 seconds and:

If there's a task being completed, it prints out the task
If there is no task being completed, it prints out the time as T-x seconds
During the final minute, NASA has 6 tasks to complete:

Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)

```sh
var num = 60; 

while (num >=0){
  if (num === 50) {
    console.log("Orbiter transfers from ground to internal power");
  }else if (num === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  }else if (num === 16) {
    console.log("Activate launch pad sound suppression system");
  }else if (num === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  }else if (num === 6) {
    console.log ("Main engine start"); 
  }else if (num === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  }else {
    console.log("T-"+num+" seconds");
  } 
  num--
}

```


### 7. For Loops
No code

### 8. Parts of a For Loop

Example:
```sh
for (var i = 0; i < 6; i = i + 1) {
  console.log("Printing out i = " + i);
}
```
### 9. Nested Loops

Example:
```sh
for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}
```
Question : 
What will this loop print out?
```sh
for (var i = 0; i <= 6; i = i + 2) {
  console.log(i);
}
```

Answer: 0246


### 10. Increment and Decrement
```sh
x++ or ++x // same as x = x + 1 
x-- or --x // same as x = x - 1
x += 3 // same as x = x + 3
x -= 6 // same as x = x - 6
x *= 2 // same as x = x * 2
x /= 5 // same as x = x / 5
```

### 11. Quiz: Changing the Loop (4-4)

```sh
var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}
```
Re-write the while loop into a for loop
```sh
for(var x=9; x>=1; x=x-1)  {
    console.log("hello " + x);
}

```
### 12. Quiz: Fix the Error 1 (4-5)
Here is a for loop that's supposed to print the numbers 5 through 9. Fix the error!
```sh
for (x < 10; x++) {
  console.log(x);
}
```

fixed: 
```sh
for (var x=5; x < 10; x++) {
    console.log(x);
}
```

### 13. Quiz: Fix the Error 2 (4-6)
The for loop below has an error. Fix it!
```sh
for (var k = 0 k < 200 k++) {
  console.log(k);
}
```
fixed: 
```sh
for (var k = 0; k < 200; k++) {
    console.log(k);
}
```

### 14. Quiz: Factorials! (4-7)
- Write a for loop that prints out the factorial of the number 12.
- A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6

```sh
var solution=1;
for( var x=1;x<=12;x++)
{
    solution=solution*x;

}
console.log(solution);
```

### 15. Quiz: Find my Seat (4-8)
- Theater seats often display a row and seat number to help theatergoers find their seats.
- If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row, write a nested for
- loop to print out all of the different seat combinations in the theater.
Things to note: 
 * the row and seat numbers start at 0, not 1
 * the highest seat number is 99, not 100

```sh
var row;
var seat;
for (row = 0; row <= 25; row++){
for (seat = 0; seat <= 99; seat++){
console.log(row + "-" + seat);
}
}
```

### 16. Lesson 4 summary
No code
