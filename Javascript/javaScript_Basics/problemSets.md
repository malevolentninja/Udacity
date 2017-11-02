# Problem Sets

Practice problems designed to help you cement your understanding of JavaScript

### Problem Set 0

Console Math: 
 adds +

subtracts - 

multiplies *

divides / 

control order of operations ( and )
#### Challenge: 
convert the speed of light from meters/second to centimeters/nanosecond

- speed of light = 299792458 meters/second
- 1 meter = 100 centimeters
- 1 nanosecond = 1.0/1000000000 seconds
```sh
console.log(299792458 * 100 * 1/1000000000);
```

### Problem Set 1

#### First Challenge: Resume hide
```sh
document.getElementById("education").style.display = "none";
```
-  Instead of hiding modify the scripts to turn each section black.
```sh
document.getElementById("education").style.backgroundColor = "#000000";
```

#### Second Challenge: Protect the Resume
-  make sure that if a user puts HTML in their resume's JSON, it doesn't break the resume!
```sh
var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};
```

#### Third Challenge: Dot Notation vs Bracket Notation
Bracket notation always works. 

```sh property ```
- dot notation: true
- bracket notation: true
- Either syntax is fine.

```sh "property1" ```
- dot notation: true
- bracket notation: true
- A number attached to the end of a property is acceptable for dot and bracket notation.

```sh "property-2" ```
- dot notation: false
- bracket notation: true
- Some special characters like the - are not acceptable with dot notation but will still work with bracket notation.

```sh "property 3" ```
- dot notation: false
- bracket notation: true
- Spaces are generally bad form in programming. 
- Don't use them except within strings. 
- But you can still access a property name with a space using bracket notation.

```sh "property$" ```
- dot notation: true
- bracket notation: true
- Surprisingly, you actually can use $ within property names and still access them with dot notation.

```sh " property" ```
- dot notation: false
- bracket notation: true
- In dot notation, the space actually gets ignored, so you are accessing "property" instead. 
- But bracket notation still works.

```sh "property()" ```
- dot notation: false
- bracket notation: true
- Without quotes, property() is a function call.
- This is just plain bad. While you can access a property like this one with bracket notation, there's no reason you should ever include () within an object property.

```sh "property[]" ```
- dot notation: false
- bracket notation: true
- Like the last one, this is bad form too. [] already have a specific purpose in JavaScript and should never be used within a property.

```sh "8property" ```
- dot notation: false
- bracket notation: true
- Dot notation fails to work if the property starts with a number.
- This is also bad form. 
- Properties should never start with numbers.


### Problem Set 2

#### Function Level Scope - variables declared within a function are only available inside that function.
Challenge : work out results of each code snippet
 
 Example 1
 ```sh
 var outsideExample = "First string";
function example() {
    var outsideExample = "Second string";
}
example();
console.log(outsideExample);
```
Prints out: First string

Example 2
```sh
var outsideExample = "First string";
function example() {
    outsideExample = "Second string";
}
example();
console.log(outsideExample);
```
Prints out: Second string 

#### Blocks - do not create their own scope

```sh
var outsideExample = "First string";
if (true) {
    var outsideExample = "Second string";
    console.log(outsideExample);
}
console.log(outsideExample);
```
What will be logged first? Second string
What will be logged second? Second string


#### Function Declaration

Two types: 
1. ```sh var functionName = function() {} ```
2. ```sh function functionName() {}```

```sh 
var x = 5;
console.log(x); // 5
var y = 10;
```
Same As: 
```sh
var x, y; // this line simply declares x and y at the same time.
x = 5;
console.log(x); // 5
y = 10;
```

Find out which code will work and which will fail?
Example 1: 
```sh
example1();
function example1() {
    console.log("Ran the example");
}
```
Answer: Ran the example

Example 2: 
```sh
example2();
var example2 = function() {
    console.log("Ran the example");
}
```
Answer: Fails because example2 isn't a function 

#### Extend resume's google maps?
- add an overlay with the name of each city that will appear when a user clicks on your map
```sh
google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map, marker);
});
```

