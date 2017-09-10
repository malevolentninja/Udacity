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


### Strings 
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


### Variables

var totalAfterTax = 53.03; // uses camelCase if the variable name is multiple words
var tip = 8; // uses lowercase if the variable name is one word

Which of these are good variable names?

```sh
var thingy = 1; // bad - not descriptive
var count = 1; // good - clearly describes 
var postLiked = false; // good - camelCase and clear description
var firstname = "Richard // bad - clear description but not camelCase
```

### Mini-Challenge: Covert Temperatures (Celsius to Fahrenheit)
* covert Celsius to Fahrenhiet - formula: F=C×1.8+32
* Use the equation and variables fahrenheit and celsius to print the Fahrenheit equivalent of 12°C
```sh
var celsius = 12;
var fahrenheit = celsius * 1.8 + 32; // equation here using celsius variable
console.log(fahrenheit); //logs the outcome  53.6
```

### String Index
What character will be printed to the JavaScript console after running the following lines of code:
```sh
var quote = "Stay awhile and listen!";
console.log(quote[6]); // w is the character. could have also used charAt() to find the string index
```

### Escaping Strings

*Select the string that returns the following output:
"The file located at "C:\\Desktop\My Documents\Roster\names.txt" contains the names on the roster."

```sh
The file located at \"C:\\\\Desktop\\My Documents\\Roster\\names.txt\" contains the names on the roster."

```

### Comparing Strings

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
