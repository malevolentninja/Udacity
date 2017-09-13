
### 1. Flowchart to Code 

```sh
var price = 15.00 // price of our hammer
var money = 20.00 // how much money I have 

if(money >= price) {
  console.log("buy the hammer");
  } else {
    console.log("don't buy the hammer");
}
```

### 2. If...Else statements

```sh
var a = 1;
var b = 2;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than or equal to b");
}
```

### 3. Else If Statements 

```sh
var weather = "sunny";

if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}
```

1. What will be printed to the console if the following code is run?

```sh
var money = 100.50;
var price = 100.50;

if (money > price) {
  console.log("You paid extra, here's your change.");
} else if (money === price) {
  console.log("You paid the exact amount, have a nice day!");
} else {
  console.log("That's not enough, you still owe me money.");
}
```
A: You paid the exact amount, have a nice day!

2. Looking at the following code, determine what medal Kendyll received.

```sh
var runner = "Kendyll";
var position = 2;
var medal;

if(position === 1) {
  medal = "gold";
} else if(position === 2) {
  medal = "silver";
} else if(position === 3) {
  medal = "bronze";
} else {
  medal = "pat on the back";
}

console.log(runner + " received a " + medal + " medal.");
```
A: Kendyll received a silver mdeal

### 4. Quizzes: 
1. Even or Odd

Make sure to test your code with different values. For example:

numbprints "even" if the number is an even number
prints "odd" if the number is an odd number

If number equals 1, then odd should be printed to the console.
If number equals 12, then even should be printed to the console.

```sh
var number = 28;

if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}
```

2. Musical Groups

Write a series of conditional statements that:

* prints "not a group" if musicians is less than or equal to 0
* prints "solo" if musicians is equal to 1
* prints "duet" if musicians is equal to 2
* prints "trio" if musicians is equal to 3
* prints "quartet" if musicians is equal to 4
* prints "this is a large group" if musicians is greater than 4

```sh
var musicians = 25;

if (musicians === 1) {
    console.log("solo");
}
else if (musicians === 2) {
    console.log("duet");
}
else if (musicians === 3) {
    console.log("trio");
}
else if (musicians === 4) {
    console.log("quartet");
}
else if (musicians > 4) {
    console.log("this is a large group");
}

else {
    console.log("not a group");
}
```

3. Murder Mystery 

In this murder mystery there are:

* four rooms: the ballroom, gallery, billiards room, and dining room
* four weapons: poison, a trophy, a pool stick, and a knife
* four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff

We also know that each weapon corresponds to a particular room:

* the poison belongs to the ballroom
* the trophy belongs to the gallery
* the pool stick belongs to the billiards room
* and the knife belongs to the dining room

And we know that each suspect was located in a specific room at the time of the murder:

*  Mr. Parkes was located in the dining room.
*  Ms. Van Cleve was located in the gallery.
*  Mrs. Sparr was located in the billiards room.
* Mr. Kalehoff was located in the ballroom.

To help solve this mystery, write a combination of conditional statements that:

* sets the value of weapon based on the room 
* sets the value of solved to true if the value of room matches the suspect's room

* Afterwards, print the following to the console if the mystery was solved:

__________ did it in the __________ with the __________!

Print to console: 
* If room equals gallery and suspect equals Ms. Van Cleve, 
* Ms. Van Cleve did it in the gallery with the trophy! s

```sh
var room = "gallery";
var suspect = "Ms. Van Cleve";
var weapon = "";
var solved = false;

if (room === "dining room" && suspect === "Mr. Parkes") {
    weapon = "knife";
    solved=true;

} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick";
    solved=true;


} else if (room === "gallery" &&  suspect === "Ms. Van Cleve") {
    weapon = "trophy";
    solved=true;

}  else if (room === "ballroom" &&  suspect === "Mr. Kalehoff") {
    weapon= "poison";
    solved=true;
}

if(solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}


```

### 5. Logical Operators

1. What value of [BLANK] would make the following expression evaluate to false. 

```sh
!(4 === 4) && "STRing" === "STRing"
```

2. Select the operator that would make the following expression evaluate to true.

```sh
3 < -10 || "James" !== "james"
```

3. Evaluate the following logical expressions
* Check the ones that evaluate to true.

```sh
true || false // true

false && false //false

!true // false

(13 > -7) || (false == 0) // true

(10 === "10") && (1 <= 2) // false

(3 != 6 % 3) && !(24 > 45) && (!false) // true
```

### 6. Logical AND and OR

1. write the code to represent checking your balance at the ATM

* Use the following variables in your solution:

* balance - the account balance
* isActive - if account is active
* checkBalance - if you want to check balance


* Print to console: 
If checkBalance equals true and isActive equals false, then Your account is no longer active



```sh
var balance = 325.00;
var checkBalance = true;
var isActive = false;

if (!checkBalance) {
	console.log("Thank you. Have a nice day!");
} else if (isActive && balance > 0) {
	console.log("Your balance is $" + balance + ".");
} else if (!isActive) {
	console.log("Your account is no longer active.");
} else if (balance === 0) {
	console.log("Your account is empty.");
} else if (balance < 0){
	console.log("Your balance is negative. Please contact bank.");
}
```

2. Ice Cream 

* Using logical operators, write a series of complex logical expressions 
* prints only if the following conditions are true:

* if flavour is set to vanilla or chocolate and
* if vessel is set to cone or bowl and
* if toppings is set to sprinkles or peanuts
* If the above conditions are true, then print out:
 " I'd like two scoops of __________ ice cream in a __________ with __________." 

```sh
var flavour = "vanilla";
var vessel = "cone";
var toppings = "peanuts";

if ((flavour === "vanilla" || flavour === "chocolate") && 
		(vessel === "cone" || vessel === "bowl") && 
		(toppings === "sprinkles" || toppings === "peanuts")) {
				console.log("I'd like two scoops of " + flavour + " ice cream in a " + vessel + " with " + toppings + ".");
		}
I'd like two scoops of vanilla ice cream in a cone with peanuts.

```


3. What do I wear? 


* Create a series of logical expressions that prints the size of a t-shirt 
* base on the measurements of shirtWidth, shirtLength, and shirtSleeve 
* Valid sizes include S, M, L, XL, 2XL, and 3XL
* print L to console.

```sh
var shirtWidth = 28;
var shirtLength = 35;
var shirtSleeve = 10.13;

// your code goes here
if (((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38))) {
  console.log("S"); 
}else if (((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength< 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63))){
  console.log("M");
}else if (((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength< 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88))){
  console.log("L");
}else if (((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength< 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63))){
  console.log("XL");
}else if (((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength< 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13))){
  console.log("2XL");
}else if (((shirtWidth >= 28) && (shirtLength >= 34 ) && (shirtSleeve >= 10.13 ))){
  console.log("3XL");
}else {
  console.log("N/A");
}

```

### 7. Truthy and Falsy 

1. Select the truthy values from the list of values.

```sh
"null"
-5
```

### 8. Ternary Operator

1. What will be printed to the console if the following code is run?

```sh
var adult = true;
var preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + 
" to attend the concert. Pick up your tickets at the " +
(preorder ? "will call" : "the gate") + ".");
```

A: It costs $40.00 to attend the concert. Pick your tickets at the will call.

### 9. Quiz: Navigating the food chain

* Write a series of ternary statements that sets the variable category equal to:

* "herbivore" if an animal eats plants
* "carnivore" if an animal eats animals
* "omnivore" if an animal eats plants and animals
* undefined if an animal doesn't eat plants or animals

* Use the eatsPlants and eatsAnimals variables to test your code.

```sh
var eatsPlants = false;
var eatsAnimals = true;

var category = (eatsPlants && eatsAnimals) ? "omnivore" : (eatsAnimals) ? "carnivore" : (eatsPlants) ? "herbivore" : undefined ;
console.log(category);

```

