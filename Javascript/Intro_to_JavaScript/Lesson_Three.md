
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



### More Complex problems

