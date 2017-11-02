# Lesson Two: DataTypes

### 1. var loveJS = true;
No code

### 2. Quiz: save and .append()

```sh
var awesomeThoughts = "I am Olivia and I am AWESOME!";
console.log(awesomeThoughts);
```

### 3. Quiz: string.replace()

```sh
var awesomeThoughts = "My name is Olivia and I am AWESOME!";

var funThoughts = awesomeThoughts.replace("AWESEOME!", "FUN");

$("#main").append(funThoughts);
```

### 4. Mixing .replace() and .append()

```sh
var formattedName = HTMLheaderName.replace("%data%", name);

$("#header").append(formattedName);
```

### 5. Quiz: Format Data
Build a Resume Header
```sh
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Aspiring Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$"#header").prepend(formattedName);
```

### 6. String Manipulation Quiz 1
- Using string methods, convert "audacity" to "Udacity".
```sh
var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    var u = "U";
    s = s.slice(2);
    s= u.concat(s);
    
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));
```


### 7. String Manipulation Quiz 1 Solution

```sh
stringToCopy.slice(beginPosition [, optionalEndPosition])
```
Example: 
```sh
var copiedText = 'JavaScript is powerful!'.slice(0, 19);
console.log(copiedText);
```
Answer: JavaScript is power

Udacity Solution: 
```sh
var udacityizer = function(s) {  
    s = 'U' + s.slice(2);
    return s;
};
```

### 8. Truthy/Falsy

There are only six falsy values in JavaScript so it is easiest to memorize those:

- false
- 0 (zero)
- "" (empty string)
- null
- undefined
- NaN

### 9. Quiz var quiz = true;

Which values are truthy or falsy?

- 1 = Truthy
- "Awesome" = Truthy
- undefined = Falsy
- -42 = Truthy
- {"state": false} = Truthy
- [false] = Truthy


### 10. Arrays
Example Array: 
```sh
["Euler", 3.14159, {name: "Olivia", job: "Aspiring Developer"}, myFunc]
```

### 11. Quiz: .append()ing Arrays quiz
Is the length of an array equal to the last index?
```sh
var skills = ["awesomeness", programming", "teaching", "JS"];
$("main").append(skills.length);
```
Answer: No

