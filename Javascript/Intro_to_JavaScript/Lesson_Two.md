# Lesson Two: Data Types & Variables

### 1. Numbers 

* Expressions 
Determine what each expression evaluates to using the console:
```sh
2 + 10 - 19 + 4 - 90 + 1 = -92

-20 + -19 - (-10) - (-1) + 24 = -4

(10/5) * 4 - 20 = -12

4096 % 12 = 4
```

* Comparing Numbers 

Determine what each expression evaluates to using the console:
```sh
43 > 47 = false

12 == 17 = false

3 <= 3 = true

1 != 0 = true
```

### 2. Comments

```sh
// single line comment 

/*
multiple
line comment
*/
```

### 3. Quiz: First expression(2-1)

* Write an expression that uses at least 3 different arithmetic operators
* The expression should equal 42.

console.log(7 * 3 + 23 - 2);


### 4. Strings 
' ' are preferred to define literals over " ".

* String concatentation

What's the result with "hello" + "world"?:

```sh
"helloworld" // there was no space added into either string
// "hello" + " world" = "hello world"
```


What do you think will happen when you type "Hello + 5*10"?:

```sh
"Hello + 5*10" // interpreter assumes the whole object is a string
```

What do you think will happen when you type "Hello" + 5*10?

```sh
"Hello50" // implicit type coercion - multiplies number and puts it into a string
```


### 5. Variables

var totalAfterTax = 53.03; // uses camelCase if the variable name is multiple words
var tip = 8; // uses lowercase if the variable name is one word

Which of these are good variable names?

```sh
var thingy = 1; // bad - not descriptive
var count = 1; // good - clearly describes 
var postLiked = false; // good - camelCase and clear description
var firstname = "Richard // bad - clear description but not camelCase
```

### 6. Mini-Challenge: Covert Temperatures (Celsius to Fahrenheit)
* covert Celsius to Fahrenhiet - formula: F=C×1.8+32
* Use the equation and variables fahrenheit and celsius to print the Fahrenheit equivalent of 12°C
```sh
var celsius = 12;
var fahrenheit = celsius * 1.8 + 32; // equation here using celsius variable
console.log(fahrenheit); //logs the outcome  53.6
```

### 7. String Index
What character will be printed to the JavaScript console after running the following lines of code:
```sh
var quote = "Stay awhile and listen!";
console.log(quote[6]); // w is the character. could have also used charAt() to find the string index
```

### 8. Escaping Strings

*Select the string that returns the following output:
"The file located at "C:\\Desktop\My Documents\Roster\names.txt" contains the names on the roster."

```sh
The file located at \"C:\\\\Desktop\\My Documents\\Roster\\names.txt\" contains the names on the roster."

```

### 9. Comparing Strings

* Enter each expression into the console
* Check the ones that evaluate to true

"green" == "blue" // false
"green" == "green" // true
"green" == "Green // false
"Green" == "green" // false
"green" > "blue" //true
"green" > "green" //false
"green" > "Green" // true
"Green" > "green" // false


### 10. Tests: 

1. Create a string with the name of your favorite food. The first letter of the string should be capitalized
```sh
console.log("Chocolate");
```

2. Fix the right side expression so it evaluates to true: "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"
```sh
var answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer);
```

3. Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson:

Blowing from the west
Fallen leaves gather
In the east.
* Each string should be printed on its own line
```sh
var haiku = "Blowing from the west\n" +"Fallen leaves gather"+ "\nIn the east."  
console.log(haiku);
```

### 11. Booleans 

#### Quiz: Data Types
* Identify which data type (Numbers, Strings, Booleans) would best represent the highlighted areas
A - Udacity => String
B - Meet Christian Plagemann... => String
C - blog.udacity.com => String
D - Whether something was "liked" or not. => Boolean
E - 80 => Number


#### Null, Undefined and NaN
```sh
"hello"/5 // NaN
```

* What will be printed out?
```sh
var signedIn;
console.log(signedIn);
// undefined
```

#### Equality

Example of strongly typed programming language code
```sh
int count = 1;
string name = "Julia";
double num = 1.2932;
float price = 2.99;
```

Equivalent code in JavaScript
```sh
var count = 1; 
var name = "Julia";
var num = 1.2932;
var price = 2.99;
```

* What value do you think the result of "Hello" % 10 will be? 
NaN


```sh
"1" == true //true
"1" === 1 // false
```

* Check the the expressions that evaluate to true: 

"3" > // true - 3 is greater than 1 (implicit type coercion)

3 != "3" // false

true >= 0 // true - 1 greater than or equal to 0 (implicit type coercion)

-1 !== false // true - 1 does not equal false (strict equality)

"false" === 0 // false

3 === 3 // true - 3 equals 3 (strict equality)

### 12. More Quizzes 

1. Semicolons
* Define two variables called thingOne and thingTwo and assign them values
* Print the values of both variables in one console.log statement using concatenation

```sh
var thingOne = "hot";
var thingTwo = " rock";
console.log(thingOne + thingTwo);
```

2. What's my Name? 
* Create a variable called fullName 
* Assign it your full name as a string
```sh
var fullName = "Malevolent Ninja";
console.log(fullName)
```

3. Out to Dinner
* Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (
* don't perform the calculation yourself, let JavaScript do it! 
* Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate
* Finally, add the bill and tip together and store it into a variable called total
* Print the total to the JavaScript console.
```sh
var bill = (10.25 + 3.99 + 7.15);
var tip = bill * 0.15;
var total = bill + tip;
console.log("$" + total.toFixed(2));
```

4. Mad Libs
* Mad Libs is a word game where players have fun substituting words for blanks in a story
* For this exercise, use the adjective variables  to fill in the blanks and complete the message
```sh
var adjective1 = 'amazing';
var adjective2 = 'fun';
var adjective3 = 'entertaining';

var madLib = "The Intro to JavaScript course is " + adjective1 + ". James and Julia are so " + adjective2 + ". I cannot wait to work through the rest of this " + adjective3 +" content!";
console.log(madLib);
```

5. One Awesome Message
* Declare and assign values to three variables for each part of the sentence that changes
 (firstName, interest, and hobby)
* Use your variables and string concatenation to create your own awesome message
* Store it in an awesomeMessage variable
* Finally, print message to the JavaScript console

```sh
var firstName = "Liv";
var interest = "problem solving";
var hobby = "Kung Fu";

var awesomeMessage = "Hi, my name is "+ firstName + "." + " I love " + interest + "." +  " In my spare time, I like to practice "+ hobby + ".";
console.log(awesomeMessage);
```
